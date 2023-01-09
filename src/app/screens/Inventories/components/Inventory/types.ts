import {iCategory, iInventory} from '../../../../../data/store/modules';

export interface iInventoryComponentProp {
  categoryId: iCategory['id'];
  inventoryId: iInventory['id'];
  inventoryIndex: number;
}

export interface iUseInventoryStateParams
  extends Omit<iInventoryComponentProp, 'inventoryId'> {}
