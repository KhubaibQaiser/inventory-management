import * as React from 'react';
import {iUseCategoryParams} from './types';
import {useCategoriesActions} from '../../../../../data/store/modules';

const useCategoryState = ({categoryIndex}: iUseCategoryParams) => {
  const {addAttribute, removeCategory} = useCategoriesActions();

  const handleAddField = React.useCallback(() => {
    addAttribute({categoryIndex});
  }, [categoryIndex, addAttribute]);

  const handleRemoveCategory = React.useCallback(() => {
    removeCategory({categoryIndex});
  }, [categoryIndex, removeCategory]);

  return {handleAddField, handleRemoveCategory};
};

export default useCategoryState;
