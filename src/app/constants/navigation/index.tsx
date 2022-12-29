import React, {FC, useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AppRoute} from './routes';
import {HomeScreen, CategoriesScreen} from '../../screens';
import {iNavigation} from './types';

const RootDrawer = createDrawerNavigator();

const RootNavigator: FC = () => {
  const [navState, setState] = useState<iNavigation[]>([
    {
      route: AppRoute.HOME,
      Component: HomeScreen,
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setState(cur => [
        ...cur,
        {
          route: AppRoute.CATEGORIES,
          Component: CategoriesScreen,
        } as iNavigation,
      ]);
    }, 5000);
  }, []);
  return (
    <RootDrawer.Navigator>
      {navState.map(({route, Component}) => (
        <RootDrawer.Screen
          key={route}
          name={route}
          component={Component}
          initialParams={{hello: 'world'}}
        />
      ))}
    </RootDrawer.Navigator>
  );
};

export default RootNavigator;
