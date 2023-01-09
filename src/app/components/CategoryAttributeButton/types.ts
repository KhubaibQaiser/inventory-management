import {AttributeType} from '@store/modules';
import {StyleProp, ViewStyle} from 'react-native';

export interface iCategoryAttributeButtonProps {
  type: AttributeType;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}
