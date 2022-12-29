import * as React from 'react';
import {iCategoryAttributeProps} from './types';
import {View} from 'react-native';
import {TextInput, IconButton, Button} from 'react-native-paper';
import {AttributeEnum} from '../../../../../data/store/modules';
import {styles} from './styles';
import {
  CategoryAttributeMenu,
  useCategoryAttributeMenuState,
} from '../../../../components';
import {iMenuItemSelectHandler} from '../../../../components/CategoryAttributeMenu/types';

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
    <View style={styles.container}>
      <TextInput
        value={attribute.title}
        onChangeText={handleTitleChange}
        style={styles.title}
      />
      <CategoryAttributeMenu
        visible={visible}
        anchor={
          <Button onPress={openMenu} style={styles.action}>
            {AttributeEnum[attribute.type]}
          </Button>
        }
        onDismiss={closeMenu}
        onSelect={handleTypeChange}
        style={styles.type}
      />
      <IconButton
        icon="delete"
        onPress={() => onRemove(attribute)}
        style={styles.action}
      />
    </View>
  );
};

export default React.memo(CategoryAttribute);
