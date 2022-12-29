import {AttributeType, AttributeEnum} from '../../../data/store/modules';
import {MenuProps} from 'react-native-paper';
import {StyleProp, ViewStyle} from 'react-native';

export interface iCategoryAttributeMenuProps extends Partial<MenuProps> {
  anchor: Required<MenuProps>['anchor'];
  onSelect: iMenuItemSelectHandler;
  style?: StyleProp<ViewStyle>;
}

export interface iCategoryAttributeItem {
  key: AttributeType;
  value: AttributeEnum;
}

export type iMenuItemSelectHandler = (attributeType: AttributeType) => void;
