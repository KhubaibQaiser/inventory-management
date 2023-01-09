import * as React from 'react';
import {
  useCategoriesActions,
  useCategoryIdsList,
} from '../../../data/store/modules';

const useCategoriesState = () => {
  const categoryIds = useCategoryIdsList();
  const {addCategory} = useCategoriesActions();

  const onAddCategory = React.useCallback(() => {
    addCategory();
  }, [addCategory]);

  return {
    categoryIds,
    onAddCategory,
  };
};

export default useCategoriesState;
