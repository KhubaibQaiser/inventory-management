import * as React from 'react';
import {Menu} from 'react-native-paper';
import {iCategoryAttributeMenuProps} from './types';
import {AttributeTypeOptions} from './constants';
import {AttributeType} from '@store/modules';
import {View} from 'react-native';
import {globalStyles} from '@styles/global.styles';

const CategoryAttributeMenu: React.VFC<iCategoryAttributeMenuProps> = ({
  anchor,
  visible = false,
  onSelect,
  onDismiss,
}) => {
  const handleSelection = React.useCallback(
    (item: AttributeType) => () => {
      onSelect(item);
      onDismiss?.call(undefined);
    },
    [onSelect, onDismiss],
  );

  return (
    <View style={[globalStyles.justifyCenter]}>
      <Menu
        visible={visible}
        onDismiss={onDismiss}
        anchor={anchor}
        anchorPosition="bottom">
        {AttributeTypeOptions.map(item => (
          <Menu.Item
            key={item.key}
            title={item.value}
            onPress={handleSelection(item.key)}
          />
        ))}
      </Menu>
    </View>
  );
};

export default CategoryAttributeMenu;
