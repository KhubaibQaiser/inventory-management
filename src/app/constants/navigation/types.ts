import {FC} from 'react';

export interface iNavigation {
  route: string;
  Component: FC;
}

export type iRootNavigatorParamList = {
  [route: string]: {categoryId: string | null};
};
