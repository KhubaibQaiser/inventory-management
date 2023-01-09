import {
  iAttribute,
  InventoryAttributeValueType,
  iCategory,
  iInventory,
} from '../../../../../../../data/store/modules';

export interface iInventoryAttributesProps {
  categoryId: iCategory['id'];
  inventoryId: iInventory['id'];
  inventoryIndex: number;
}

export interface iUseInventoryAttributesStateParams
  extends iInventoryAttributesProps {}

export interface iInventoryUIAttributeProps {
  attribute: iAttribute;
  value: InventoryAttributeValueType;
  onChange: iInventoryAttributeChangeHandler;
}

export type iInventoryAttributeChangeHandler = (
  attributeId: iInventoryComponentAttribute['id'],
  value: InventoryAttributeValueType,
) => void;

export interface iInventoryComponentAttribute {
  id: string;
  label: string;
  type: iAttribute['type'];
  value: InventoryAttributeValueType;
}
