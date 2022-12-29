import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';

const Container = ({children}: PropsWithChildren) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Container;
