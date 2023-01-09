import * as React from 'react';
import {Button, Card} from 'react-native-paper';
import {iInventoryComponentProp} from './types';
import {globalStyles} from '../../../../styles/global.styles';
import {InventoryTitle, InventoryAttributes} from './components';
import useInventoryState from './useInventoryState';

const Inventory: React.VFC<iInventoryComponentProp> = ({
  categoryId,
  inventoryId,
  inventoryIndex,
}) => {
  const {handleRemoveInventory} = useInventoryState({
    inventoryIndex,
    categoryId,
  });

  return (
    <Card style={[globalStyles.mb16, globalStyles.cardContainer]}>
      <InventoryTitle categoryId={categoryId} inventoryId={inventoryId} />
      <InventoryAttributes
        categoryId={categoryId}
        inventoryId={inventoryId}
        inventoryIndex={inventoryIndex}
      />
      <Button
        icon="delete"
        mode="contained"
        style={globalStyles.mt8}
        onPress={handleRemoveInventory}>
        Remove
      </Button>
    </Card>
  );
};

export default Inventory;
