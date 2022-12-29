import * as React from 'react';
import {FAB} from 'react-native-paper';
import {iAddButtonProps} from './types';
import {styles} from './styles';

const AddButton: React.VFC<iAddButtonProps> = ({onPress}) => {
  return <FAB icon="plus" style={styles.fab} onPress={onPress} />;
};

export default AddButton;
