import {iCategory, iInventory} from '@store/modules';

export interface iInventoryTitleProps {
  categoryId: iCategory['id'];
  inventoryId: iInventory['id'];
}
