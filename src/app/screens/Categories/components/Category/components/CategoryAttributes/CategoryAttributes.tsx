import * as React from 'react';
import {iCategoryAttributesProps} from './types';
import useCategoryAttributesState from './useCategoryAttributesState';
import CategoryAttribute from './CategoryAttribute';

const CategoryAttributes: React.VFC<iCategoryAttributesProps> = ({
  categoryId,
  categoryIndex,
}) => {
  const {attributes, handleAttributeChange, handleRemoveAttribute} =
    useCategoryAttributesState({categoryId, categoryIndex});

  return (
    <>
      {attributes.map((attr, index) => {
        return (
          <CategoryAttribute
            key={attr.id}
            attribute={attr}
            index={index}
            onChange={handleAttributeChange}
            onRemove={handleRemoveAttribute}
          />
        );
      })}
    </>
  );
};

export default CategoryAttributes;
