import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {useCategoriesList} from '../../../data/store/modules';

const CategoriesScreen = () => {
  const {params} = useRoute();
  const categories = useCategoriesList();
  console.log({categories});

  return (
    <View>
      <Text>Categories screen: {JSON.stringify(params)}</Text>
    </View>
  );
};

export default CategoriesScreen;
