import {iCategory, iInventory} from '../../../../../../../data/store/modules';

export interface iInventoryTitleProps {
  categoryId: iCategory['id'];
  inventoryId: iInventory['id'];
}
