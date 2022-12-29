import * as React from 'react';
import {Menu, Card} from 'react-native-paper';
import {iCategoryAttributeMenuProps} from './types';
import {AttributeTypeOptions} from './constants';
import {AttributeType} from '../../../data/store/modules';

const CategoryAttributeMenu: React.VFC<iCategoryAttributeMenuProps> = ({
  anchor,
  visible = false,
  style,
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
    <Card style={style}>
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
    </Card>
  );
};

export default CategoryAttributeMenu;
