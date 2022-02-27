import type { Character } from '../common';
import { Vector } from '../vector';
import type { ActionName } from '@slippilab/common';
export const jigglypuff: Character = {
  scale: 0.94,
  shieldOffset: new Vector(0, 4.828),
  shieldSize: 0.94 * 13.125,
  animationMap: new Map<ActionName, string>([
    ['AppealL', 'AppealL'],
    ['AppealR', 'AppealR'],
    ['AttackS3Hi', 'AttackS3Hi'],
    ['AttackS3HiS', 'AttackS3Hi'],
    ['AttackS3Lw', 'AttackS3Lw'],
    ['AttackS3LwS', 'AttackS3Lw'],
    ['AttackS3S', 'AttackS3S'],
    ['AttackS4Hi', ''],
    ['AttackS4HiS', ''],
    ['AttackS4Lw', ''],
    ['AttackS4LwS', ''],
    ['AttackS4S', 'AttackS4'],
    ['BarrelWait', ''],
    ['Bury', ''],
    ['BuryJump', ''],
    ['BuryWait', ''],
    ['CaptureCaptain', ''],
    ['CaptureDamageKoopa', ''],
    ['CaptureDamageKoopaAir', ''],
    ['CaptureKirby', ''],
    ['CaptureKirbyYoshi', ''],
    ['CaptureKoopa', ''],
    ['CaptureKoopaAir', ''],
    ['CaptureMewtwo', ''],
    ['CaptureMewtwoAir', ''],
    ['CaptureWaitKirby', ''],
    ['CaptureWaitKoopa', ''],
    ['CaptureWaitKoopaAir', ''],
    ['CaptureYoshi', ''],
    ['CatchDashPull', 'CatchWait'],
    ['CatchPull', 'CatchWait'],
    ['DamageBind', ''],
    ['DamageIce', ''],
    ['DamageIceJump', 'Fall'],
    ['DamageSong', ''],
    ['DamageSongRv', ''],
    ['DamageSongWait', ''],
    ['DeadDown', ''],
    ['DeadLeft', ''],
    ['DeadRight', ''],
    ['DeadUpFallHitCamera', ''],
    ['DeadUpFallHitCameraIce', ''],
    ['DeadUpFallIce', ''],
    ['DeadUpStar', ''],
    ['DeadUpStarIce', ''],
    ['DownReflect', ''],
    ['EntryEnd', 'Entry'],
    ['EntryStart', 'Entry'],
    ['Escape', 'EscapeN'],
    ['FlyReflectCeil', ''],
    ['FlyReflectWall', 'WallDamage'],
    ['Guard', 'Guard'],
    ['GuardOff', 'GuardOff'],
    ['GuardOn', 'GuardOn'],
    ['GuardReflect', 'Guard'],
    ['GuardSetOff', 'GuardDamage'],
    ['ItemParasolDamageFall', ''],
    ['ItemParasolFall', ''],
    ['ItemParasolFallSpecial', ''],
    ['ItemParasolOpen', ''],
    ['KirbyYoshiEgg', ''],
    ['KneeBend', 'Landing'],
    ['LandingFallSpecial', 'Landing'],
    ['LiftTurn', ''],
    ['LiftWait', ''],
    ['LiftWalk1', ''],
    ['LiftWalk2', ''],
    ['LightThrowAirB4', 'LightThrowAirB'],
    ['LightThrowAirF4', 'LightThrowAirF'],
    ['LightThrowAirHi4', 'LightThrowAirHi'],
    ['LightThrowAirLw4', 'LightThrowAirLw'],
    ['LightThrowB4', 'LightThrowB'],
    ['LightThrowF4', 'LightThrowF'],
    ['LightThrowHi4', 'LightThrowHi'],
    ['LightThrowLw4', 'LightThrowLw'],
    ['Rebirth', 'Entry'],
    ['RebirthWait', 'Wait'],
    ['ReboundStop', ''],
    ['RunDirect', ''],
    ['ShieldBreakDownD', 'DownBoundD'],
    ['ShieldBreakDownU', 'DownBoundU'],
    ['ShieldBreakFall', 'DamageFall'],
    ['ShieldBreakFly', ''],
    ['ShieldBreakStandD', 'DownStandD'],
    ['ShieldBreakStandU', 'DownStandU'],
    ['ShoulderedTurn', ''],
    ['ShoulderedWait', ''],
    ['ShoulderedWalkFast', ''],
    ['ShoulderedWalkMiddle', ''],
    ['ShoulderedWalkSlow', ''],
    ['SwordSwing1', 'Swing1'],
    ['SwordSwing3', 'Swing3'],
    ['SwordSwing4', 'Swing4'],
    ['SwordSwingDash', 'SwingDash'],
    ['ThrownB', ''],
    ['ThrownCopyStar', ''],
    ['ThrownF', ''],
    ['ThrownFB', ''],
    ['ThrownFF', ''],
    ['ThrownFHi', ''],
    ['ThrownFLw', ''],
    ['ThrownHi', ''],
    ['ThrownKirby', ''],
    ['ThrownKirbyStar', ''],
    ['ThrownKoopaAirB', ''],
    ['ThrownKoopaAirF', ''],
    ['ThrownKoopaB', ''],
    ['ThrownKoopaF', ''],
    ['ThrownLw', ''],
    ['ThrownLwWomen', ''],
    ['ThrownMewtwo', ''],
    ['ThrownMewtwoAir', ''],
    ['Wait', 'Wait'],
    ['YoshiEgg', ''],
  ]),
  specialsMap: new Map<number, string>([
    [341, 'JumpAerialF1'],
    [342, 'JumpAerialF2'],
    [343, 'JumpAerialF3'],
    [344, 'JumpAerialF4'],
    [345, 'JumpAerialF5'],
    [346, 'SpecialNStartR'],
    [347, 'SpecialNStartL'],
    [348, 'SpecialN'],
    [349, 'SpecialN'],
    [350, 'SpecialN'],
    [351, 'SpecialN'],
    [352, 'SpecialNEndR'],
    [353, 'SpecialNEndL'],
    [354, 'SpecialAirNStartR'],
    [355, 'SpecialAirNStartL'],
    [356, 'SpecialN'],
    [357, 'SpecialN'],
    [358, 'SpecialN'],
    [359, 'SpecialN'],
    [360, 'SpecialAirNEndR'],
    [361, 'SpecialAirNEndL'],
    [362, 'DamageFall'],
    [363, 'SpecialS'],
    [364, 'SpecialAirS'],
    [365, 'SpecialHiL'],
    [366, 'SpecialAirHiL'],
    [367, 'SpecialHiR'],
    [368, 'SpecialAirHiR'],
    [369, 'SpecialLwL'],
    [370, 'SpecialAirLwL'],
    [371, 'SpecialLwR'],
    [372, 'SpecialAirLwR'],
  ]),
};
