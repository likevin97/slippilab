import { parseReplay } from '@slippilab/parser';
import { Subject } from 'rxjs';
import { run } from '@slippilab/search';
import type { Highlight, Query } from '@slippilab/search';
import { supportedStagesById } from '@slippilab/viewer';
import {
  all,
  either,
  isOffstage,
  isDead,
  isInHitstun,
  isGrabbed,
  isInGroundedControl,
  isCrouching,
  not,
  opponent,
} from '@slippilab/common';
import type { Predicate, ReplayData } from '@slippilab/common';

export interface Replay {
  fileName: string;
  game: ReplayData;
  highlights: Map<string, Highlight[]>;
}

export interface State {
  darkMode: boolean;
  debugMode: boolean;
  replay?: Replay;
  currentFileIndex?: number;
  currentHighlightIndex?: number;
  files: File[];
  searches: Map<string, [Query, Predicate?]>;
}

export class Model {
  private currentState: State = {
    darkMode: false,
    debugMode: false,
    files: [],
    searches: new Map(),
  };
  private stateSubject$: Subject<State> = new Subject<State>();
  state$ = this.stateSubject$.asObservable();

  constructor() {
    this.stateSubject$.next(this.currentState);
  }

  setDarkMode(darkMode: boolean) {
    const newState = { ...this.currentState, darkMode };
    this.currentState = newState;
    this.stateSubject$.next(newState);
  }

  setDebugMode(debugMode: boolean) {
    const newState = { ...this.currentState, debugMode };
    this.currentState = newState;
    this.stateSubject$.next(newState);
  }

  setFiles(files: File[]) {
    const newState = {
      ...this.currentState,
      files,
      currentFileIndex: undefined,
      currentHighlightIndex: undefined,
    };
    this.currentState = newState;
    this.stateSubject$.next(newState);
    this.nextFile();
  }

  setSearches(searches: Map<string, [Query, Predicate?]>) {
    const newState = { ...this.currentState, searches };
    this.currentState = newState;
    this.stateSubject$.next(newState);
  }

  async jumpToFile(file: File) {
    const index = this.currentState.files.indexOf(file);
    if (this.currentState.currentFileIndex === index) {
      return;
    }
    const replay = await this.parseFile(file);
    if (replay === undefined) {
      return;
    }
    const newState = {
      ...this.currentState,
      replay,
      currentHighlightIndex: undefined,
      currentFileIndex: index,
    };
    this.currentState = newState;
    this.stateSubject$.next(newState);
  }

  async jumpToHighlight(highlight: Highlight) {
    if (!this.currentState.replay?.highlights) {
      return;
    }
    const highlightsList = [
      ...this.currentState.replay.highlights.values(),
    ].flatMap((x) => x);
    const index = highlightsList.indexOf(highlight);
    if (index === undefined || index === -1) {
      return;
    }
    const newState = { ...this.currentState, currentHighlightIndex: index };
    this.currentState = newState;
    this.stateSubject$.next(newState);
  }

  async nextFile() {
    const initialFileIndex = this.currentState.currentFileIndex ?? -1;
    let currentFileIndex = initialFileIndex;
    let nextReplay: Replay | undefined;
    do {
      currentFileIndex =
        (currentFileIndex + 1) % this.currentState.files.length;
      nextReplay = await this.parseFile(
        this.currentState.files[currentFileIndex],
      );
    } while (nextReplay === undefined && currentFileIndex !== initialFileIndex);
    if (nextReplay !== undefined) {
      const newState = {
        ...this.currentState,
        replay: nextReplay,
        currentHighlightIndex: undefined,
        currentFileIndex,
      };
      this.currentState = newState;
      this.stateSubject$.next(newState);
    }
  }

  async prevFile() {
    const initialFileIndex = this.currentState.currentFileIndex ?? -1;
    let currentFileIndex = initialFileIndex;
    let prevReplay: Replay | undefined;
    do {
      currentFileIndex =
        (currentFileIndex - 1 + this.currentState.files.length) %
        this.currentState.files.length;
      prevReplay = await this.parseFile(
        this.currentState.files[currentFileIndex],
      );
    } while (prevReplay === undefined && currentFileIndex !== initialFileIndex);
    if (prevReplay !== undefined) {
      const newState = {
        ...this.currentState,
        replay: prevReplay,
        currentHighlightIndex: undefined,
        currentFileIndex,
      };
      this.currentState = newState;
      this.stateSubject$.next(newState);
    }
  }

  async nextHighlight() {
    if (!this.currentState.replay) {
      return;
    }
    const initialHighlightIndex = this.currentState.currentHighlightIndex ?? -1;
    const highlightsList = [
      ...this.currentState.replay.highlights.values(),
    ].flatMap((x) => x);
    this.jumpToHighlight(
      highlightsList[(initialHighlightIndex + 1) % highlightsList.length],
    );
  }

  async prevHighlight() {
    if (!this.currentState.replay) {
      return;
    }
    const initialHighlightIndex = this.currentState.currentHighlightIndex ?? 0;
    const highlightsList = [
      ...this.currentState.replay.highlights.values(),
    ].flatMap((x) => x);
    this.jumpToHighlight(
      highlightsList[
        (initialHighlightIndex - 1 + highlightsList.length) %
          highlightsList.length
      ],
    );
  }

  private async parseFile(file: File): Promise<Replay | undefined> {
    try {
      if (file.name.endsWith('.slp')) {
        const game = parseReplay(await file.arrayBuffer());
        if (this.isSupported(game)) {
          let highlights: Map<string, Highlight[]> = new Map();
          if (game.settings.playerSettings.filter((ps) => ps).length === 2) {
            [...this.currentState.searches.entries()].forEach(
              ([name, queryParams]) =>
                highlights.set(name, run(game, ...queryParams)),
            );
          }
          return {
            fileName: file.name,
            game: game,
            highlights,
          };
        }
      }
    } catch (e) {
      console.error(`cannot parse file ${file.name}`, e);
      return undefined;
    }
    return undefined;
  }

  private isSupported(game: ReplayData): boolean {
    const stageId = game.settings.stageId;
    if (!stageId) {
      return false;
    }
    return Boolean(supportedStagesById[stageId]);
  }
}

export const model = new Model();

const killComboQuery: [Query, Predicate?] = [
  [
    { predicate: opponent(isInHitstun) },
    { predicate: opponent(isDead), delayed: true },
  ],
  not(opponent(isInGroundedControl)),
];
const grabPunishQuery: [Query, Predicate?] = [
  [
    { predicate: opponent(isGrabbed) },
    {
      predicate: all(
        not(opponent(isDead)),
        either(not(opponent(isInGroundedControl)), opponent(isOffstage)),
      ),
    },
  ],
];
const edgeguardQuery: [Query, Predicate?] = [
  [
    { predicate: opponent(isOffstage) },
    { predicate: not(opponent(isInHitstun)), delayed: true },
    { predicate: opponent(isInHitstun), delayed: true },
    { predicate: opponent(isDead), delayed: true },
  ],
  not(opponent(isInGroundedControl)),
];
const crouchCancelQuery: [Query, Predicate?] = [
  [{ predicate: isCrouching }, { predicate: isInHitstun }],
];
model.setSearches(
  new Map([
    ['kill', killComboQuery],
    ['edgeguard', edgeguardQuery],
    ['grab punish', grabPunishQuery],
    ['crouch cancels', crouchCancelQuery],
  ]),
);
