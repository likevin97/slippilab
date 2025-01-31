import type { Character } from '../common';
import { Vector } from '../vector';
import type { ActionName } from '@slippilab/common';
export const pikachu: Character = {
  scale: 0.9,
  shieldOffset: new Vector(2.724, 9.003), // TODO
  shieldSize: 0.9 * 12,
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
    [341, 'SpecialN'],
    [342, 'SpecialN'],
    [343, 'SpecialSStart'],
    [344, 'SpecialSHold'],
    [345, 'UNSUPPORTED'],
    [346, 'SpecialSEnd'],
    [347, 'SpecialS'],
    [348, 'SpecialAirSStart'],
    [349, 'SpecialAirSHold'],
    [350, 'SpecialS'],
    [351, 'SpecialAirSEnd'],
    [352, 'SpecialS'],
    [353, 'SpecialHiStart'],
    [354, 'SpecialHiStart'],
    [355, 'SpecialHiEnd'],
    [356, 'SpecialAirHiStart'],
    [357, 'SpecialAirHiStart'],
    [358, 'SpecialAirHiEnd'],
    [359, 'SpecialLwStart'],
    [360, 'SpecialLwLoop'],
    [361, 'SpecialLwEnd'],
    [362, 'SpecialLwEnd'],
    [363, 'SpecialAirLwStart'],
    [364, 'SpecialAirLwLoop'],
    [365, 'SpecialAirLwEnd'],
    [366, 'SpecialAirLwEnd'],
  ]),
};
