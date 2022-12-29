import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AppRoute} from './routes';
import {HomeScreen, CategoriesScreen} from '../../screens';
import {useCategoriesList} from '../../../data/store/modules';
import {iRootNavigatorParamList} from './types';

const RootDrawer = createDrawerNavigator<iRootNavigatorParamList>();

const RootNavigator: FC = () => {
  const categories = useCategoriesList();

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
          component={HomeScreen}
          initialParams={{categoryId: id}}
        />
      ))}
    </RootDrawer.Navigator>
  );
};

export default RootNavigator;
