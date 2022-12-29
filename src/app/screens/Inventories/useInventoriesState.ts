import * as React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  useCategoryById,
  useInventoriesByCategoryId,
  useInventoriesActions,
} from '../../../data/store/modules';
import {FlatList} from 'react-native';
import {iInventoryChangeHandler} from './components';

const useInventoriesState = () => {
  const {params} = useRoute();
  const category = useCategoryById(params?.categoryId);
  const inventories = useInventoriesByCategoryId(category?.id);
  const listRef = React.useRef<FlatList>(null);

  const {addInventory, changeInventory, removeInventory} =
    useInventoriesActions();

  const onAddInventory = React.useCallback(() => {
    if (!category) {
      return;
    }
    addInventory({categoryId: category.id});
    setTimeout(() => {
      listRef.current?.scrollToEnd();
    }, 0);
  }, [category, addInventory]);

  const onChangeInventory = React.useCallback(
    (inventoryIndex: number): iInventoryChangeHandler =>
      inventory => {
        changeInventory({index: inventoryIndex, inventory});
      },
    [changeInventory],
  );

  const onRemoveInventory = React.useCallback(
    (index: number) => () => {
      if (!category) {
        return;
      }
      removeInventory({categoryId: category.id, index});
    },
    [category, removeInventory],
  );

  return {
    category,
    inventories,
    listRef,
    onAddInventory,
    onChangeInventory,
    onRemoveInventory,
  };
};

export default useInventoriesState;
