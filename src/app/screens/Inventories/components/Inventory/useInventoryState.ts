import * as React from 'react';
import {useInventoriesActions} from '@store/modules';
import {iUseInventoryStateParams} from './types';

const useInventoryState = ({
  categoryId,
  inventoryIndex,
}: iUseInventoryStateParams) => {
  const {removeInventory} = useInventoriesActions();

  const handleRemoveInventory = React.useCallback(() => {
    removeInventory({categoryId, index: inventoryIndex});
  }, [inventoryIndex, categoryId, removeInventory]);

  return {handleRemoveInventory};
};

export default useInventoryState;
