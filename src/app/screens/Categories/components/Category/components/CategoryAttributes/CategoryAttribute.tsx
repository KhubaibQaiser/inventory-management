import * as React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {iCategoryAttributeProps} from './types';
import {styles} from './styles';
import {
  CategoryAttributeMenu,
  useCategoryAttributeMenuState,
  Input,
  CategoryAttributeButton,
  iMenuItemSelectHandler,
} from '@components/index';
import {globalStyles} from '@styles/global.styles';

const CategoryAttribute: React.VFC<iCategoryAttributeProps> = ({
  index,
  attribute,
  onRemove,
  onChange,
}) => {
  const {visible, openMenu, closeMenu} = useCategoryAttributeMenuState();

  const handleTypeChange: iMenuItemSelectHandler = React.useCallback(
    type => {
      onChange(index, {...attribute, type});
    },
    [onChange, attribute, index],
  );

  const handleTitleChange = React.useCallback(
    (value: string) => {
      onChange(index, {...attribute, title: value});
    },
    [onChange, attribute, index],
  );

  return (
    <View style={[styles.container, globalStyles.mb8]}>
      <Input
        label="Field"
        value={attribute.title}
        onChangeText={handleTitleChange}
        style={[styles.title, globalStyles.mr8]}
      />
      <CategoryAttributeMenu
        visible={visible}
        anchor={
          <CategoryAttributeButton
            type={attribute.type}
            onPress={openMenu}
            style={globalStyles.mt8}
          />
        }
        onDismiss={closeMenu}
        onSelect={handleTypeChange}
        style={[globalStyles.mr8]}
      />
      <IconButton
        icon="delete"
        onPress={() => onRemove(index)}
        style={globalStyles.selfCenter}
      />
    </View>
  );
};

export default React.memo(CategoryAttribute);
