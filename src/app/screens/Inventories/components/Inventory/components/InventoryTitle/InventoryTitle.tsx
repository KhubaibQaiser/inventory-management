import * as React from 'react';
import {Text} from 'react-native-paper';
import {globalStyles} from '@styles/global.styles';
import {iInventoryTitleProps} from './types';
import {useInventoryTitle} from '@store/modules';

const InventoryTitle: React.VFC<iInventoryTitleProps> = ({
  categoryId,
  inventoryId,
}) => {
  const inventoryTitle = useInventoryTitle(categoryId, inventoryId);

  return inventoryTitle ? (
    <Text style={[globalStyles.mr8, globalStyles.mb8, globalStyles.labelText]}>
      {inventoryTitle}
    </Text>
  ) : null;
};

export default InventoryTitle;
