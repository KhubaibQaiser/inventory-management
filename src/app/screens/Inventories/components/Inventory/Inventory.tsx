import * as React from 'react';
import {Button, Card} from 'react-native-paper';
import {
  iInventoryComponentProp,
  iInventoryAttributeChangeHandler,
} from './types';
import InventoryAttribute from './InventoryAttribute';
import {Input} from '../../../../components';
import {globalStyles} from '../../../../styles/global.styles';

const Inventory: React.VFC<iInventoryComponentProp> = ({
  category,
  inventory,
  onChange,
  onRemove,
}) => {
  const handleAttributeChange: iInventoryAttributeChangeHandler =
    React.useCallback(
      (attributeId, value) => {
        onChange({
          ...inventory,
          attributes: {...inventory.attributes, [attributeId]: value},
        });
      },
      [onChange, inventory],
    );

  const handleTitleChange = React.useCallback(
    (title: string) => {
      onChange({...inventory, title});
    },
    [onChange, inventory],
  );

  return (
    <Card style={[globalStyles.mb16, globalStyles.cardContainer]}>
      <Input
        label={'Title'}
        value={inventory.title}
        onChangeText={handleTitleChange}
        style={globalStyles.mb8}
      />
      {category.attributes.map(attr => (
        <InventoryAttribute
          key={attr.id}
          attribute={attr}
          value={inventory.attributes[attr.id]}
          onChange={handleAttributeChange}
        />
      ))}
      <Button
        icon="delete"
        mode="contained"
        style={globalStyles.mt8}
        onPress={onRemove}>
        Remove
      </Button>
    </Card>
  );
};

export default Inventory;
