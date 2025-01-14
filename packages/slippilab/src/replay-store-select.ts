import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';
import '@spectrum-web-components/action-button/sp-action-button';
import '@spectrum-web-components/textfield/sp-textfield';
import type { ActionButton } from '@spectrum-web-components/action-button';
import { model } from './model';
import { api } from './api';
import { Constants } from './const';


@customElement('replay-store-select')
export class ReplayStoreSelect extends LitElement {
  static get styles() {
    return css`
      input {
        display: none;
      }
      .container {
        display: flex;
        justify-content: center;
      }
    `;
  }

  @query('#replay-input-files')
  private filesInput?: HTMLInputElement;

  private connectCodeInput?: string;

  @queryAll('sp-action-button')
  private actionButtons?: NodeListOf<ActionButton>;

  private async uploadToReplayStore() {
    this.selectFiles(this.filesInput);
  }

  private async selectFiles(input?: HTMLInputElement) {
    if (this.connectCodeInput === undefined) {
      alert("Connect code is undefined while trying to save to replay store");
      return;
    }

    if (!input?.files) {
      alert("Files have not been selected");
      return;
    }

    if (input.files.length > Constants.MAX_REPLAY_PER_CONNECT_CODE) {
      alert("More than " + Constants.MAX_REPLAY_PER_CONNECT_CODE + " files were selected.");
      return;
    }

    if (input.files.length > 0) {
      var allFiles = Array.from(input.files);
      
      model.setFiles(allFiles);

      let currentConnectCode = this.connectCodeInput;

      for await (var slpFile of allFiles) {
        var fileNameComponents = slpFile.name.split(".");
        var fileExtension = fileNameComponents[fileNameComponents.length - 1];
        if (fileExtension == "slp") {
          console.log("Got the slp file. Trying to zip and upload");
          var zipFile = await model.zip(slpFile);
          await api.postSlpReplays(currentConnectCode, zipFile);
          console.log("Zipped and uploaded slp file: ", zipFile.name);
        } else {
          await api.postSlpReplays(currentConnectCode, slpFile);
          console.log("Uploaded pre-zipped slp file: ", slpFile.name);
        }
      }

      api.deleteSlpReplaysExceptLatest(currentConnectCode, Constants.MAX_REPLAY_PER_CONNECT_CODE);

    }
    this.actionButtons?.forEach((actionButton) => actionButton.blur());

  }


  private async openFromReplayStore() {

    if (this.connectCodeInput === undefined || this.connectCodeInput == "") {
      alert("Connect code is undefined while trying to open from replay store");
      return;
    }
    const slpReplays = await api.getSlpReplays(this.connectCodeInput);

    if (Array.isArray(slpReplays)) {
      var files: File[] = [];

      console.log("Here are the number of replays fetched for " + this.connectCodeInput + ":", slpReplays.length);

      if (slpReplays.length == 0) {
        alert("Found 0 replays for the provided connect code");
        return;
      }

      slpReplays.forEach(async function (slpReplay) {
        var file = blobToFile(slpReplay);

        files.push(file);

      });
      model.setFiles(Array.from(files));
    }
    else {
      console.log("Error fetching replays");
    }
  }

  private openFile() {
    if (this.connectCodeInput === undefined) {
      alert("Connect code is undefined while trying to save to replay store");
      return;
    }
    this.filesInput?.click();
  }

  private setConnectCode(event: any) {
    let connectCodeFromEvent = event.target.value;
    this.connectCodeInput = connectCodeFromEvent;
  }


  render() {
    return html`
      <div class="container">
        <sp-textfield id="connect-code" @change=${(event: any) => this.setConnectCode(event)} placeholder="Enter your connect code"></sp-textfield>
      </div>
      <div class="container">
        <sp-action-button class="label" @click=${this.openFromReplayStore}>
          Open From Replay Store
        </sp-action-button>
      </div>
      <div class="container">
        <sp-action-button class="label" @click=${this.openFile}>
          Save To Replay Store
        </sp-action-button>
        <input
          id="replay-input-files"
          name="replay-input-files"
          type="file"
          accept=".slp,.zip"
          multiple
          @change=${this.uploadToReplayStore}
        />
      </div>
    `;
  }
}

function blobToFile(slpReplay: any) {
  const byteCharacters = atob(slpReplay.fileData);

  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: slpReplay.contentType });

  var file = new File([blob], slpReplay.fileName);
  return file;
}

