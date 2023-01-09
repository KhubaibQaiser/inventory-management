import {FC} from 'react';
import {AppRoute} from './routes';

export interface iNavigation {
  route: string;
  Component: FC;
}

export type RouteParams = {categoryId: string};

export type iRootNavigatorParamList = {
  [AppRoute.CATEGORIES]: undefined;
  [AppRoute.INVENTORIES]: RouteParams;
};
