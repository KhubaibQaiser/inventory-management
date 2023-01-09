import * as React from 'react';
import {iUseCategoryTitleParams} from './types';
import {useCategoryTitle, useCategoriesActions} from '@store/modules';

const useCategoryTitleState = ({
  categoryId,
  categoryIndex,
}: iUseCategoryTitleParams) => {
  const title = useCategoryTitle(categoryId);
  const {changeCategoryTitle} = useCategoriesActions();

  const handleTitleChange = React.useCallback(
    (newTitle: string) => {
      changeCategoryTitle({categoryIndex, title: newTitle});
    },
    [categoryIndex, changeCategoryTitle],
  );

  return {title, handleTitleChange};
};

export default useCategoryTitleState;
