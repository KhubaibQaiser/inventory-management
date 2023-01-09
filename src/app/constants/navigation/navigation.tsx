import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AppRoute} from './routes';
import {InventoriesScreen, CategoriesScreen} from '@screens/index';
import {useCategoriesRoutes} from '@store/modules';
import {iRootNavigatorParamList} from './types';

const RootDrawer = createDrawerNavigator<iRootNavigatorParamList>();

const RootNavigator: FC = () => {
  const categories = useCategoriesRoutes();

  return (
    <RootDrawer.Navigator initialRouteName={AppRoute.CATEGORIES}>
      <RootDrawer.Screen
        name={AppRoute.CATEGORIES}
        component={CategoriesScreen}
      />
      {categories.map(({title, id}) => (
        <RootDrawer.Screen
          key={id}
          name={title as AppRoute.INVENTORIES}
          component={InventoriesScreen}
          initialParams={{categoryId: id}}
        />
      ))}
    </RootDrawer.Navigator>
  );
};

export default RootNavigator;
