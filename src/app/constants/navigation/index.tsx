import React, {FC, useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AppRoute} from './routes';
import {HomeScreen, CategoriesScreen} from '../../screens';
import {iNavigation} from './types';

const RootDrawer = createDrawerNavigator();

const RootNavigator: FC = () => {
  const [navState, setState] = useState<iNavigation[]>([
    {
      route: AppRoute.CATEGORIES,
      Component: CategoriesScreen,
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setState(cur => [
        ...cur,
        {
          route: AppRoute.DASHBOARD,
          Component: HomeScreen,
        } as iNavigation,
      ]);
    }, 5000);
  }, []);
  return (
    <RootDrawer.Navigator>
      {navState.map(({route, Component}) => (
        <RootDrawer.Screen key={route} name={route} component={Component} />
      ))}
    </RootDrawer.Navigator>
  );
};

export default RootNavigator;
