import * as React from 'react';
import {iInputProps} from './types';
import {TextInput} from 'react-native-paper';

const Input: React.VFC<iInputProps> = ({
  value,
  label,
  onChangeText,
  ...props
}) => {
  return (
    <TextInput
      {...props}
      mode="outlined"
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
