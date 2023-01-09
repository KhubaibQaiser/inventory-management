import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AppRoute} from './routes';
import {InventoriesScreen, CategoriesScreen} from '../../screens';
import {useCategoriesRoutes} from '../../../data/store/modules';
import {iRootNavigatorParamList} from './types';

const RootDrawer = createDrawerNavigator<iRootNavigatorParamList>();

const RootNavigator: FC = () => {
  const categories = useCategoriesRoutes();

  return (
    <RootDrawer.Navigator>
      <RootDrawer.Screen
        name={AppRoute.CATEGORIES}
        component={CategoriesScreen}
        initialParams={{categoryId: null}}
      />
      {categories.map(({title, id}) => (
        <RootDrawer.Screen
          key={id}
          name={title}
          component={InventoriesScreen}
          initialParams={{categoryId: id}}
        />
      ))}
    </RootDrawer.Navigator>
  );
};

export default RootNavigator;
