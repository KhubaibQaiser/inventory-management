import * as React from 'react';
import {
  useInventoriesActions,
  useInventoriesIdsListByCategoryId,
} from '../../../data/store/modules';
import {FlatList} from 'react-native';
import {iUseInventoriesStateParams} from './types';

const useInventoriesState = ({route}: iUseInventoriesStateParams) => {
  const categoryId = route.params.categoryId;
  const inventoryIds = useInventoriesIdsListByCategoryId(categoryId);
  const listRef = React.useRef<FlatList>(null);

  const {addInventory} = useInventoriesActions();

  const onAddInventory = React.useCallback(() => {
    if (!categoryId) {
      return;
    }
    addInventory({categoryId});
    setTimeout(() => {
      listRef.current?.scrollToEnd();
    }, 0);
  }, [categoryId, addInventory]);

  return {
    categoryId,
    inventoryIds,
    listRef,
    onAddInventory,
  };
};

export default useInventoriesState;
