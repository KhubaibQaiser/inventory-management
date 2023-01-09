import * as React from 'react';
import {Text} from 'react-native-paper';
import {globalStyles} from '@styles/global.styles';

const EmptyListMessage: React.VFC = () => {
  return (
    <Text style={[globalStyles.textCenter, globalStyles.captionText]}>
      The list is empty!
    </Text>
  );
};

export default EmptyListMessage;
