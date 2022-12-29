import {useSelector, shallowEqual} from 'react-redux';
import {iCategory, iCategoriesState} from './types';
import {AppStateType} from '../../store';

const selfStateSelector = (state: AppStateType): iCategoriesState =>
  state['categories-state'];

export const useCategoriesList = (): iCategory[] =>
  useSelector(selfStateSelector, shallowEqual).categories;

export const useCategoryById = (
  id: iCategory['id'] | undefined | null,
): iCategory | null => {
  const categories = useCategoriesList();
  if (!id) {
    return null;
  }
  return categories.find(category => category.id === id) ?? null;
};
