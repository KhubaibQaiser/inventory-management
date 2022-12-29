import {iCategory} from '../Categories';

export interface iInventory {
  id: string;
  title: string;
  categoryId: iCategory['id'];
  attributes: iInventoryAttribute;
}

export type InventoryAttributeValueType = string | number | boolean | null;

export interface iInventoryAttribute {
  [attributeId: string]: InventoryAttributeValueType;
}

export interface iInventoriesState {
  [categoryId: string]: iInventory[];
}

// ACTION PAYLOADS
export interface iAddInventoryPayload {
  categoryId: iCategory['id'];
}

export interface iChangeInventoryPayload {
  index: number;
  inventory: iInventory;
}

export interface iRemoveInventoryPayload {
  categoryId: iCategory['id'];
  index: number;
}
