import type {DrawerScreenProps} from '@react-navigation/drawer';
import {iRootNavigatorParamList} from '../../constants/navigation/types';
import {AppRoute} from '../../constants/navigation/routes';

export type iInventoriesScreenProps = DrawerScreenProps<
  iRootNavigatorParamList,
  AppRoute.INVENTORIES
>;

export interface iUseInventoriesStateParams extends iInventoriesScreenProps {}
