import * as React from 'react';
import {
  iUseCategoryAttributesParams,
  iAttributeChangeHandler,
  iRemoveAttributeHandler,
} from './types';
import {useCategoryAttributes, useCategoriesActions} from '@store/modules';

const useCategoryAttributesState = ({
  categoryId,
  categoryIndex,
}: iUseCategoryAttributesParams) => {
  const attributes = useCategoryAttributes(categoryId);
  const {changeAttribute, removeAttribute} = useCategoriesActions();

  const handleAttributeChange: iAttributeChangeHandler = React.useCallback(
    (attributeIndex, attribute) => {
      changeAttribute({
        categoryIndex,
        attributeIndex,
        attribute,
      });
    },
    [categoryIndex, changeAttribute],
  );

  const handleRemoveAttribute: iRemoveAttributeHandler = React.useCallback(
    attributeIndex => {
      removeAttribute({
        categoryIndex,
        attributeIndex,
      });
    },
    [categoryIndex, removeAttribute],
  );

  return {attributes, handleAttributeChange, handleRemoveAttribute};
};
export default useCategoryAttributesState;
