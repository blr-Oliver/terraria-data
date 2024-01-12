export type PrefixType = 'weapon' | 'accessory';

export interface Prefix {
  id: number;
  name: string;
  type: PrefixType;
  tier: -2 | -1 | 0 | 1 | 2;
  coinValue: number;
}

export interface WeaponPrefix extends Prefix {
  type: 'weapon';
  group: string;
  damage?: number;
  speed?: number;
  critChance?: number;
  manaCost?: number;
  size?: number;
  velocity?: number;
  knockback?: number;
}

export type AccessoryEffect = 'defense' | 'critChance' | 'damage' | 'moveSpeed' | 'meleeSpeed' | 'mana';

export interface AccessoryPrefix extends Prefix {
  type: 'accessory';
  effect: AccessoryEffect;
  value: 1 | 2 | 3 | 4 | 20;
}