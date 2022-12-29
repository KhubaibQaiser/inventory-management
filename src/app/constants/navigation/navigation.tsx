import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AppRoute} from './routes';
import {HomeScreen, CategoriesScreen} from '../../screens';
import {useCategoriesList} from '../../../data/store/modules';

const RootDrawer = createDrawerNavigator();

const RootNavigator: FC = () => {
  const categories = useCategoriesList();

  return (
    <RootDrawer.Navigator>
      <RootDrawer.Screen
        name={AppRoute.CATEGORIES}
        component={CategoriesScreen}
      />
      {categories.map(({title}) => (
        <RootDrawer.Screen
          key={title}
          name={title}
          component={HomeScreen}
          initialParams={{category: title}}
        />
      ))}
    </RootDrawer.Navigator>
  );
};

export default RootNavigator;
