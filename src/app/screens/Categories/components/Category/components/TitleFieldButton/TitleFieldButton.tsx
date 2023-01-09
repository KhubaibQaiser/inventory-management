import * as React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../../../../../styles/global.styles';
import {Button, Menu} from 'react-native-paper';
import useTitleFieldButtonState from './useTitleFieldButtonState';
import {iTitleFieldButtonProps} from './types';

const TitleFieldButton: React.VFC<iTitleFieldButtonProps> = ({
  categoryId,
  categoryIndex,
}) => {
  const {
    attributes,
    titleAttribute,
    showMenu,
    onShow,
    onHide,
    handleSelection,
  } = useTitleFieldButtonState({categoryId, categoryIndex});

  return (
    <>
      <View style={[globalStyles.justifyCenter]}>
        <Menu
          visible={showMenu}
          onDismiss={onHide}
          anchor={
            <Button mode="outlined" onPress={onShow} style={[globalStyles.mt8]}>
              {titleAttribute
                ? `Title: ${titleAttribute.title}`
                : 'Set Title Field'}
            </Button>
          }
          anchorPosition="top">
          {attributes.map(item => (
            <Menu.Item
              key={item.id}
              title={item.title}
              onPress={handleSelection(item)}
            />
          ))}
        </Menu>
      </View>
    </>
  );
};

export default TitleFieldButton;
