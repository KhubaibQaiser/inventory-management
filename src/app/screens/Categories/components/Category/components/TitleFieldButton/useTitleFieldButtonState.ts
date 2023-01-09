import * as React from 'react';
import {iUseTitleFieldButtonParams} from './types';
import {
  useCategoryAttributes,
  iAttribute,
  useCategoriesActions,
  useCategoryTitleAttribute,
} from '@store/modules';

const useTitleFieldButtonState = ({
  categoryId,
  categoryIndex,
}: iUseTitleFieldButtonParams) => {
  const attributes = useCategoryAttributes(categoryId);
  const titleAttribute = useCategoryTitleAttribute(categoryId);
  const {setTitleAttributeId} = useCategoriesActions();

  const [visible, setVisible] = React.useState(false);

  const onShow = () => {
    setVisible(true);
  };

  const onHide = () => {
    setVisible(false);
  };

  const handleSelection = React.useCallback(
    (attribute: iAttribute) => () => {
      setTitleAttributeId({categoryIndex, attributeId: attribute.id});
      onHide();
    },
    [categoryIndex, setTitleAttributeId],
  );

  return {
    attributes,
    titleAttribute,
    showMenu: visible,
    onShow,
    onHide,
    handleSelection,
  };
};

export default useTitleFieldButtonState;
