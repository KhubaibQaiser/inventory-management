import * as React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {iInventory} from '../../../data/store/modules';
import {InventoryComponent} from './components';
import {AddButton, Container, EmptyListMessage} from '../../components';
import useInventoriesState from './useInventoriesState';

const InventoriesScreen: React.VFC = () => {
  const {
    category,
    inventories,
    listRef,
    onAddInventory,
    onChangeInventory,
    onRemoveInventory,
  } = useInventoriesState();

  const renderItem: ListRenderItem<iInventory> = React.useCallback(
    ({item, index}) => {
      return !category ? null : (
        <InventoryComponent
          category={category}
          inventory={item}
          onChange={onChangeInventory(index)}
          onRemove={onRemoveInventory(index)}
        />
      );
    },
    [category, onChangeInventory, onRemoveInventory],
  );

  return (
    <Container>
      <FlatList
        ref={listRef}
        data={inventories}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyListMessage />}
        keyExtractor={item => item.id}
      />
      <AddButton onPress={onAddInventory} />
    </Container>
  );
};

export default InventoriesScreen;
