import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {iCategoriesState, iCategory} from './types';
import useActions from '../../utils/useActions';

const initialCategoriesState: iCategoriesState = {
  categories: [],
};

export const CategoriesState = createSlice({
  name: 'categories-state',
  initialState: initialCategoriesState,
  reducers: {
    addCategory(state, {payload}: PayloadAction<iCategory>) {
      state.categories.push(payload);
    },
  },
});

export const useCategoriesActions = () => useActions(CategoriesState.actions);
