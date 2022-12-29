import {
  iCategory,
  iInventory,
  InventoryAttributeValueType,
  iAttribute,
} from '../../../../../data/store/modules';

export interface iInventoryComponentProp {
  category: iCategory;
  inventory: iInventory;
  onChange: iInventoryChangeHandler;
  onRemove: () => void;
}

export type iInventoryChangeHandler = (inventory: iInventory) => void;

export interface iInventoryComponentAttribute {
  id: string;
  label: string;
  type: iAttribute['type'];
  value: InventoryAttributeValueType;
}

export interface iInventoryUIAttributeProps {
  attribute: iAttribute;
  value: InventoryAttributeValueType;
  onChange: iInventoryAttributeChangeHandler;
}

export type iInventoryAttributeChangeHandler = (
  attributeId: iInventoryComponentAttribute['id'],
  value: InventoryAttributeValueType,
) => void;
