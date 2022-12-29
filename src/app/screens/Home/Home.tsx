import React, {FC} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';

const HomeScreen: FC = () => {
  const {params} = useRoute();

  return (
    <View>
      <Text>Home screen: {JSON.stringify(params)}</Text>
    </View>
  );
};

export default HomeScreen;
