import type { Character } from '../common';
import { Vector } from '../vector';
import type { ActionName } from '../animations/actions';
export const sheik: Character = {
  scale: 1.4,
  shieldOffset: new Vector(0.541, 6.969),
  shieldSize: 1.4 * 11.625,
  animationMap: new Map<ActionName, string>([
    ['Rebirth', 'Entry'],
    ['RebirthWait', 'Entry'],
    ['RunDirect', ''],
    ['KneeBend', 'Landing'],
    ['LandingFallSpecial', 'Landing'],
    ['LightThrowF4', ''],
    ['LightThrowB4', ''],
    ['LightThrowHi4', ''],
    ['LightThrowLw4', ''],
    ['LightThrowAirF4', ''],
    ['LightThrowAirB4', ''],
    ['LightThrowAirHi4', ''],
    ['LightThrowAirLw4', ''],
    ['HeavyThrowF4', ''],
    ['HeavyThrowB4', ''],
    ['HeavyThrowHi4', ''],
    ['HeavyThrowLw4', ''],
    ['SwordSwing1', 'Swing1'],
    ['SwordSwing3', 'Swing3'],
    ['SwordSwing4', 'Swing4'],
    ['SwordSwingDash', 'SwingDash'],
    ['LiftWait', ''],
    ['LiftWalk1', ''],
    ['LiftWalk2', ''],
    ['AttackS3S', 'AttackS3'],
    ['AttackS4S', 'AttackS4'],
    ['LiftTurn', ''],
    ['GuardSetOff', 'GuardDamage'],
    ['GuardReflect', 'Guard'],
    ['ShieldBreakFly', ''],
    ['ShieldBreakFall', ''],
    ['ShieldBreakDownU', ''],
    ['ShieldBreakDownD', ''],
    ['ShieldBreakStandU', ''],
    ['ShieldBreakStandD', ''],
    ['CatchPull', ''],
    ['CatchDashPull', ''],
    ['CaptureNeck', ''],
    ['CaptureFoot', ''],
    ['Escape', 'EscapeN'],
    ['ReboundStop', ''],
    ['ThrownF', ''],
    ['ThrownB', ''],
    ['ThrownHi', ''],
    ['ThrownLw', ''],
    ['ThrownLwWomen', ''],
    ['FlyReflectWall', 'WallDamage'],
    ['FlyReflectCeil', ''],
    ['AppealR', 'Appeal'],
    ['AppealL', 'Appeal'],
    ['ShoulderedWait', ''],
    ['ShoulderedWalkSlow', ''],
    ['ShoulderedWalkMiddle', ''],
    ['ShoulderedWalkFast', ''],
    ['ShoulderedTurn', ''],
    ['ThrownFF', ''],
    ['ThrownFB', ''],
    ['ThrownFHi', ''],
    ['ThrownFLw', ''],
    ['CaptureCaptain', ''],
    ['CaptureYoshi', ''],
    ['YoshiEgg', ''],
    ['CaptureKoopa', ''],
    ['CaptureDamageKoopa', ''],
    ['CaptureWaitKoopa', ''],
    ['ThrownKoopaF', ''],
    ['ThrownKoopaB', ''],
    ['CaptureKoopaAir', ''],
    ['CaptureDamageKoopaAir', ''],
    ['CaptureWaitKoopaAir', ''],
    ['ThrownKoopaAirF', ''],
    ['ThrownKoopaAirB', ''],
    ['CaptureKirby', ''],
    ['CaptureWaitKirby', ''],
    ['ThrownKirbyStar', ''],
    ['ThrownCopyStar', ''],
    ['ThrownKirby', ''],
    ['BarrelWait', ''],
    ['Bury', ''],
    ['BuryWait', ''],
    ['BuryJump', ''],
    ['DamageSong', ''],
    ['DamageSongWait', ''],
    ['DamageSongRv', ''],
    ['DamageBind', ''],
    ['CaptureMewtwo', ''],
    ['CaptureMewtwoAir', ''],
    ['ThrownMewtwo', ''],
    ['ThrownMewtwoAir', ''],
    ['EntryStart', 'Rebirth'],
    ['EntryEnd', 'Entry'],
    ['DamageIce', ''],
    ['DamageIceJump', ''],
    ['CaptureKirbyYoshi', ''],
    ['KirbyYoshiEgg', ''],
    ['CaptureLeadead', ''],
    ['CaptureLikelike', ''],
    ['DownReflect', ''],
    ['Wait1', 'Wait'],
    ['Wait3', 'Wait2'],
    ['Wait4', 'Wait2'],
    ['SquatWait1', 'SquatWait'],
    ['SquatWait2', 'SquatWait'],
    ['AttackS4Hold', ''],
    ['DamageElec', ''],
    ['CliffWait1', 'CliffWait'],
    ['CliffWait2', 'CliffWait'],
    ['SlipDown', ''],
    ['Slip', ''],
    ['SlipTurn', ''],
    ['SlipDash', ''],
    ['SlipWait', ''],
    ['SlipStand', ''],
    ['SlipAttack', ''],
    ['SlipEscapeF', ''],
    ['SlipEscapeB', ''],
    ['CaptureKoopaHit', ''],
    ['ThrownKoopaEndF', ''],
    ['ThrownKoopaEndB', ''],
    ['CaptureKoopaAirHit', ''],
    ['ThrownKoopaAirEndF', ''],
    ['ThrownKoopaAirEndB', ''],
    ['ThrownKirbyDrinkSShot', ''],
    ['ThrownKirbySpitSShot', ''],
  ]),
  specialsMap: new Map<number, string>([
    [341, 'SpecialNStart'],
    [342, 'SpecialNLoop'],
    [343, 'SpecialNCansel'],
    [344, 'SpecialNEnd'],
    [345, 'SpecialAirNStart'],
    [346, 'SpecialAirNLoop'],
    [347, 'SpecialAirNCansel'],
    [348, 'SpecialAirNEnd'],
    [349, 'SpecialSStart'],
    [350, 'SpecialS'],
    [351, 'SpecialSEnd'],
    [352, 'SpecialAirSStart'],
    [353, 'SpecialAirS'],
    [354, 'SpecialAirSEnd'],
    [355, 'SpecialHiStart'],
    [356, 'Unsupported'], // Invisible
    [357, 'SpecialHi'],
    [358, 'SpecialAirHiStart'],
    [359, 'Unsupported'], // Invisible
    [360, 'SpecialAirHi'],
    [361, 'SpecialLw'],
    [362, 'SpecialLw2'],
    [363, 'SpecialAirLw'],
    [364, 'SpecialAirLw2'],
  ]),
};
