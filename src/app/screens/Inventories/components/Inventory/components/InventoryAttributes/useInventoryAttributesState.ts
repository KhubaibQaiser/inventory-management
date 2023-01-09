import * as React from 'react';
import {
  useInventoriesActions,
  useCategoryAttributes,
  useInventoryAttributes,
} from '../../../../../../../data/store/modules';
import {
  iUseInventoryAttributesStateParams,
  iInventoryAttributeChangeHandler,
} from './types';

const useInventoryAttributesState = ({
  categoryId,
  inventoryId,
  inventoryIndex,
}: iUseInventoryAttributesStateParams) => {
  const categoryAttributes = useCategoryAttributes(categoryId);
  const inventoryAttributes = useInventoryAttributes(categoryId, inventoryId);

  const {changeInventoryAttribute} = useInventoriesActions();

  const handleAttributeChange: iInventoryAttributeChangeHandler =
    React.useCallback(
      (attributeId, value) => {
        changeInventoryAttribute({
          categoryId,
          inventoryIndex,
          attributeId,
          value,
        });
      },
      [categoryId, inventoryIndex, changeInventoryAttribute],
    );

  return {categoryAttributes, inventoryAttributes, handleAttributeChange};
};

export default useInventoryAttributesState;
