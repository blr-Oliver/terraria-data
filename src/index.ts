import * as allPrefixes from './data/prefixes.json';
import * as baseWeapons from './data/weapons/base.json';
import * as consoleWeapons from './data/weapons/console.json';
import * as weaponsMeta from './data/weapons/meta.json';
import * as mobileWeapons from './data/weapons/mobile.json';
import * as oldGenWeapons from './data/weapons/oldGen.json';
import * as pcWeapons from './data/weapons/pc.json';
import * as threeDSWeapons from './data/weapons/threeDS.json';
import {ItemMetaInfo, NameMapping, Prefix, WeaponData} from './typings/types';

export * from './typings/types';

export const WEAPONS: WeaponData = {
  meta: weaponsMeta as NameMapping<ItemMetaInfo>,
  base: baseWeapons,
  console: consoleWeapons,
  mobile: mobileWeapons,
  oldGen: oldGenWeapons,
  pc: pcWeapons,
  threeDS: threeDSWeapons
}

export const PREFIXES = allPrefixes as Prefix[];