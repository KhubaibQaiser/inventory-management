import * as React from 'react';
import {iInventoryAttributesProps} from './types';

import InventoryAttribute from './InventoryAttribute';
import useInventoryAttributesState from './useInventoryAttributesState';

const InventoryAttributes: React.VFC<iInventoryAttributesProps> = ({
  categoryId,
  inventoryId,
  inventoryIndex,
}) => {
  const {categoryAttributes, inventoryAttributes, handleAttributeChange} =
    useInventoryAttributesState({categoryId, inventoryId, inventoryIndex});

  return (
    <>
      {categoryAttributes.map(attr => (
        <InventoryAttribute
          key={attr.id}
          attribute={attr}
          value={inventoryAttributes[attr.id]}
          onChange={handleAttributeChange}
        />
      ))}
    </>
  );
};

export default React.memo(InventoryAttributes);
