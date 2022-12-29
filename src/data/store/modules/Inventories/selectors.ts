import {useSelector, shallowEqual} from 'react-redux';
import {iInventoriesState, iInventory} from './types';
import {AppStateType} from '../../store';
import {iCategory} from '../Categories';

const selfStateSelector = (state: AppStateType): iInventoriesState =>
  state['inventories-state'];

export const useInventoriesByCategoryId = (
  categoryId: iCategory['id'] | undefined | null,
): iInventory[] => {
  const inventories = useSelector(selfStateSelector, shallowEqual);
  if (!categoryId) {
    return [];
  }
  return inventories[categoryId] || [];
};
