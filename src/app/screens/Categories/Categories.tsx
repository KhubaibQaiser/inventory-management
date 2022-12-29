import * as React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {
  useCategoriesList,
  iCategory,
  useCategoriesActions,
} from '../../../data/store/modules';
import {Category} from './components';
import {AddButton, Container} from '../../components';
import {
  iAddAttributeHandler,
  iChangeCategoryHandler,
  iRemoveAttributeHandler,
  iRemoveCategoryHandler,
} from './components';

const CategoriesScreen = () => {
  const categories = useCategoriesList();
  const {
    addCategory,
    removeCategory,
    updateCategory,
    addAttribute,
    removeAttribute,
  } = useCategoriesActions();

  console.log(JSON.stringify(categories));

  const onAddCategory = React.useCallback(() => {
    addCategory();
  }, [addCategory]);

  const onRemoveCategory: iRemoveCategoryHandler = React.useCallback(
    category => {
      removeCategory({category});
    },
    [removeCategory],
  );

  const onRemoveCategoryAttribute = React.useCallback(
    (categoryIndex: number): iRemoveAttributeHandler =>
      attribute => {
        removeAttribute({categoryIndex, attribute});
      },
    [removeAttribute],
  );

  const onUpdateCategory = React.useCallback(
    (index: number): iChangeCategoryHandler =>
      category => {
        updateCategory({index, category});
      },
    [updateCategory],
  );

  const onAddCategoryAttribute = React.useCallback(
    (categoryIndex: number): iAddAttributeHandler =>
      () => {
        addAttribute({categoryIndex});
      },
    [addAttribute],
  );

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
        keyExtractor={item => item.id}
      />
      <AddButton onPress={onAddCategory} />
    </Container>
  );
};

export default CategoriesScreen;
