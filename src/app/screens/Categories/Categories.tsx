import * as React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {iCategory} from '../../../data/store/modules';
import {Category} from './components';
import {AddButton, Container, EmptyListMessage} from '../../components';
import useCategoriesState from './useCategoriesState';

const CategoriesScreen = () => {
  const {
    categories,
    onAddCategory,
    onRemoveCategory,
    onUpdateCategory,
    onAddCategoryAttribute,
    onRemoveCategoryAttribute,
  } = useCategoriesState();

  const renderItem: ListRenderItem<iCategory> = React.useCallback(
    ({item, index}) => {
      return (
        <Category
          category={item}
          onChange={onUpdateCategory(index)}
          onRemoveCategory={onRemoveCategory}
          onAddAttribute={onAddCategoryAttribute(index)}
          onRemoveAttribute={onRemoveCategoryAttribute(index)}
        />
      );
    },
    [
      onUpdateCategory,
      onAddCategoryAttribute,
      onRemoveCategoryAttribute,
      onRemoveCategory,
    ],
  );

  return (
    <Container>
      <FlatList
        data={categories}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyListMessage />}
        keyExtractor={item => item.id}
      />
      <AddButton onPress={onAddCategory} />
    </Container>
  );
};

export default CategoriesScreen;
