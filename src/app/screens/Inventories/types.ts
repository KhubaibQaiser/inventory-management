import type {DrawerScreenProps} from '@react-navigation/drawer';
import {AppRoute, iRootNavigatorParamList} from '@constants/navigation';

export type iInventoriesScreenProps = DrawerScreenProps<
  iRootNavigatorParamList,
  AppRoute.INVENTORIES
>;

export interface iUseInventoriesStateParams extends iInventoriesScreenProps {}
