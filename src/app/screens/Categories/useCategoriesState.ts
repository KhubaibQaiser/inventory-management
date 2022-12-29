import * as React from 'react';
import {
  useCategoriesList,
  useCategoriesActions,
} from '../../../data/store/modules';
import {
  iRemoveCategoryHandler,
  iAddAttributeHandler,
  iChangeCategoryHandler,
  iRemoveAttributeHandler,
} from './components';

const useCategoriesState = () => {
  const categories = useCategoriesList();
  const {
    addCategory,
    removeCategory,
    updateCategory,
    addAttribute,
    removeAttribute,
  } = useCategoriesActions();

  const onAddCategory = React.useCallback(() => {
    addCategory();
  }, [addCategory]);

  const onRemoveCategory: iRemoveCategoryHandler = React.useCallback(
    category => {
      removeCategory({category});
    },
    [removeCategory],
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

  const onRemoveCategoryAttribute = React.useCallback(
    (categoryIndex: number): iRemoveAttributeHandler =>
      attribute => {
        removeAttribute({categoryIndex, attribute});
      },
    [removeAttribute],
  );

  return {
    categories,
    onAddCategory,
    onUpdateCategory,
    onRemoveCategory,
    onAddCategoryAttribute,
    onRemoveCategoryAttribute,
  };
};

export default useCategoriesState;
