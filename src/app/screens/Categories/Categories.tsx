import * as React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {iCategory} from '../../../data/store/modules';
import {Category} from './components';
import {AddButton, Container, EmptyListMessage} from '../../components';
import useCategoriesState from './useCategoriesState';
import {globalStyles} from '../../styles/global.styles';

const CategoriesScreen = () => {
  const {categoryIds, onAddCategory} = useCategoriesState();

  const renderItem: ListRenderItem<iCategory['id']> = React.useCallback(
    ({item, index}) => {
      return <Category categoryId={item} categoryIndex={index} />;
    },
    [],
  );

  return (
    <Container>
      <FlatList
        data={categoryIds}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyListMessage />}
        keyExtractor={item => item}
        contentContainerStyle={globalStyles.fabPadding}
      />
      <AddButton onPress={onAddCategory} />
    </Container>
  );
};

export default CategoriesScreen;
