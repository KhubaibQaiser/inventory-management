import React, {VFC} from 'react';
import {ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {
  useCategoryById,
  useInventoriesByCategoryId,
  useInventoriesActions,
} from '../../../data/store/modules';
import {InventoryComponent, iInventoryChangeHandler} from './components';
import {AddButton, Container} from '../../components';

const HomeScreen: VFC = () => {
  const {params} = useRoute();
  const category = useCategoryById(params?.categoryId);
  const inventories = useInventoriesByCategoryId(category?.id);
  console.log({category, inventories});

  const {addInventory, changeInventory, removeInventory} =
    useInventoriesActions();

  const onAddInventory = React.useCallback(() => {
    if (!category) {
      return;
    }
    addInventory({categoryId: category.id});
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

  return (
    <Container>
      <ScrollView>
        {inventories.map((inventory, index) => (
          <InventoryComponent
            key={inventory.id}
            category={category!}
            inventory={inventory}
            onChange={onChangeInventory(index)}
            onRemove={onRemoveInventory(index)}
          />
        ))}
      </ScrollView>
      <AddButton onPress={onAddInventory} />
    </Container>
  );
};

export default HomeScreen;
