import {useSelector, shallowEqual} from 'react-redux';
import {iCategory} from './types';
import {AppStateType} from '../../store';

const selfStateSelector = (state: AppStateType) => state['categories-state'];

export const useCategoriesList = (): iCategory[] =>
  useSelector(selfStateSelector, shallowEqual).categories;
