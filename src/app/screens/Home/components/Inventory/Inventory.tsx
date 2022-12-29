import * as React from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {
  iInventoryComponentProp,
  iInventoryAttributeChangeHandler,
} from './types';
import InventoryAttribute from './InventoryAttribute';

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
    <View>
      <TextInput value={inventory.title} onChangeText={handleTitleChange} />
      {category.attributes.map(attr => (
        <InventoryAttribute
          key={attr.id}
          attribute={attr}
          value={inventory.attributes[attr.id]}
          onChange={handleAttributeChange}
        />
      ))}
      <Button icon="delete" mode="contained" onPress={onRemove}>
        Remove
      </Button>
    </View>
  );
};

export default Inventory;
