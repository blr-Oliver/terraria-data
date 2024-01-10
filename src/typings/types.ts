import {ItemCard, ItemMetaInfo} from './items';

export * from './items';
export * from './prefixes';
export * from './varying';

export type NameMapping<T> = { [name: string]: T };

export type WeaponData = {
  meta: NameMapping<ItemMetaInfo>;
  base: NameMapping<ItemCard>;
  console: NameMapping<ItemCard>;
  mobile: NameMapping<ItemCard>;
  oldGen: NameMapping<ItemCard>;
  pc: NameMapping<ItemCard>;
  threeDS: NameMapping<ItemCard>;
}