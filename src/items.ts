import {PlatformList, PlatformVarying} from './varying';

export interface Item {
  name: string;
  meta: ItemMetaInfo;
  card: PlatformVarying<ItemCard>;
}

export interface ItemMetaInfo {
  page: string;
  pageTitle?: string;
  platforms: PlatformList;
  categories?: string[];
}

export type ItemCard = ItemInfo & WeaponInfo & ExplosiveInfo & ToolInfo & YoyoInfo & WhipInfo & AmmoInfo;

export interface ItemInfo {
  id?: number | number[];
  image?: string[],
  tags?: string[];
  tooltip?: string;
  consumable?: boolean;
  maxStack?: number;
  hardMode?: boolean;
}

export interface WeaponInfo {
  damage?: number;
  damageType?: string;
  knockback?: number;
  critChance?: number;
  useTime?: number;
  rarity?: number;
  autoSwing?: boolean;
  buyValue?: number;
  sellValue?: number;
  manaCost?: number;
  velocity?: number;
  projectiles?: ProjectileInfo[];
  ammoType?: string;
  summonType?: string;
  hitsPerSwing?: number;
  speedBonusMultiplier?: Ratio;
}

export type Ratio = {
  n: number;
  d: number;
}

export interface ProjectileInfo {
  id: number;
  name: string;
  image: string;
}

export interface AmmoInfo {
  baseVelocity?: number;
  velocityMultiplier?: number;
}

export interface ExplosiveInfo {
  radius?: number;
  explosivesDestroyTiles?: boolean;
  liquidRocketsWork?: boolean;
  clusterRocketSecondaryExplosion?: boolean;
  blastRadius?: string;
  liquidRocketBlastRadius?: string;
  clusterRocketBlastRadius?: string;
  miniNukeBlastRadius?: string;
  bigRocketBlastRadius?: string;
}

export interface ToolInfo {
  pickaxePower?: number;
  hammerPower?: number;
  axePower?: number;
  toolSpeed?: number;
  rangeBonus?: number;
}

export interface YoyoInfo {
  reach?: number;
  spinDuration?: number;
  isOneDropLogo?: boolean;
}

export interface WhipInfo {
  multiHitPenalty?: number;
  range?: number;
  tagDamage?: number;
  tagCrit?: number;
}
