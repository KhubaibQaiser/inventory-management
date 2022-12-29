import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoute} from './routes';
import {HomeScreen} from '../../screens/Home';

const RootDrawer = createDrawerNavigator();

const RootNavigation: FC = () => {
  return (
    <NavigationContainer>
      <RootDrawer.Navigator>
        <RootDrawer.Screen name={AppRoute.HOME} component={HomeScreen} />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
