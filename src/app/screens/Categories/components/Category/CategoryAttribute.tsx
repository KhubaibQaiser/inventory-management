import * as React from 'react';
import {iCategoryAttributeProps} from './types';
import {View, TouchableOpacity} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {AttributeEnum} from '../../../../../data/store/modules';
import {styles} from './styles';
import {
  CategoryAttributeMenu,
  useCategoryAttributeMenuState,
  Input,
} from '../../../../components';
import {iMenuItemSelectHandler} from '../../../../components/CategoryAttributeMenu/types';
import {globalStyles} from '../../../../styles/global.styles';

const CategoryAttribute: React.VFC<iCategoryAttributeProps> = ({
  attribute,
  onRemove,
  onChange,
}) => {
  const {visible, openMenu, closeMenu} = useCategoryAttributeMenuState();

  const handleTypeChange: iMenuItemSelectHandler = React.useCallback(
    type => {
      onChange({...attribute, type});
    },
    [onChange, attribute],
  );

  const handleTitleChange = React.useCallback(
    (value: string) => {
      onChange({...attribute, title: value});
    },
    [onChange, attribute],
  );

  return (
    <View
      style={[globalStyles.row, globalStyles.itemsCenter, globalStyles.mb8]}>
      <Input
        label="Field"
        value={attribute.title}
        onChangeText={handleTitleChange}
        style={[styles.title, globalStyles.mr8]}
      />
      <CategoryAttributeMenu
        visible={visible}
        anchor={
          <TouchableOpacity onPress={openMenu} style={styles.type}>
            <Text style={styles.typeText}>{AttributeEnum[attribute.type]}</Text>
          </TouchableOpacity>
        }
        onDismiss={closeMenu}
        onSelect={handleTypeChange}
        style={[styles.type, globalStyles.mr8]}
      />
      <IconButton icon="delete" onPress={() => onRemove(attribute)} />
    </View>
  );
};

export default React.memo(CategoryAttribute);
