import * as React from 'react';
import {iCategoryAttributeButtonProps} from './types';
import {AttributeEnum} from '../../../data/store/modules';
import {Text} from 'react-native-paper';
import {styles} from './styles';
import {View, TouchableOpacity} from 'react-native';

const CategoryAttributeButton: React.VFC<iCategoryAttributeButtonProps> = ({
  type,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.typeText}>{AttributeEnum[type]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryAttributeButton;
