import {ItemCard, ItemMetaInfo} from './typings/items';

export * from './typings/items';
export * from './typings/prefixes';
export * from './typings/varying';

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