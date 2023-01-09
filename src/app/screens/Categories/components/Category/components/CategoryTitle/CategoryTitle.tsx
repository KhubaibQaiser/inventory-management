import * as React from 'react';
import {iCategoryTitleProps} from './types';
import {Input} from '@components/index';
import useCategoryTitleState from './useCategoryTitleState';
import {globalStyles} from '@styles/global.styles';

const CategoryTitle: React.VFC<iCategoryTitleProps> = ({
  categoryId,
  categoryIndex,
}) => {
  const {title, handleTitleChange} = useCategoryTitleState({
    categoryId,
    categoryIndex,
  });

  return (
    <Input
      label="Title"
      value={title}
      onChangeText={handleTitleChange}
      style={globalStyles.mb8}
    />
  );
};

export default CategoryTitle;
