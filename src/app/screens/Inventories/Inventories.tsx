import * as React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {iInventory} from '../../../data/store/modules';
import {InventoryComponent} from './components';
import {AddButton, Container, EmptyListMessage} from '../../components';
import useInventoriesState from './useInventoriesState';
import {globalStyles} from '../../styles/global.styles';

const InventoriesScreen: React.VFC = () => {
  const {categoryId, inventoryIds, listRef, onAddInventory} =
    useInventoriesState();

  const renderItem: ListRenderItem<iInventory['id']> = React.useCallback(
    ({item, index}) => {
      return (
        <InventoryComponent
          categoryId={categoryId}
          inventoryId={item}
          inventoryIndex={index}
        />
      );
    },
    [categoryId],
  );

  return (
    <Container>
      <FlatList
        ref={listRef}
        data={inventoryIds}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyListMessage />}
        keyExtractor={item => item}
        contentContainerStyle={[globalStyles.fabPadding]}
      />
      <AddButton onPress={onAddInventory} />
    </Container>
  );
};

export default InventoriesScreen;
