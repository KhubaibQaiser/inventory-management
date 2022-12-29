import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  iCategoriesState,
  iUpdateCategoryPayload,
  iAddAttributePayload,
  iRemoveAttributePayload,
  iRemoveCategoryPayload,
} from './types';
import useActions from '../../utils/useActions';
import {generateUuid} from '../../utils/string.utils';

const initialCategoriesState: iCategoriesState = {
  categories: [],
};

export const CategoriesState = createSlice({
  name: 'categories-state',
  initialState: initialCategoriesState,
  reducers: {
    addCategory(state) {
      state.categories.push({
        title: 'Category',
        titleAttribute: 'Field',
        attributes: [{id: generateUuid(), title: 'Field', type: 'TEXT'}],
        id: generateUuid(),
      });
    },
    removeCategory(state, {payload}: PayloadAction<iRemoveCategoryPayload>) {
      state.categories = state.categories.filter(
        categ => categ.id !== payload.category.id,
      );
    },
    updateCategory(state, {payload}: PayloadAction<iUpdateCategoryPayload>) {
      state.categories[payload.index] = payload.category;
    },
    addAttribute(state, {payload}: PayloadAction<iAddAttributePayload>) {
      state.categories[payload.categoryIndex].attributes = [
        ...state.categories[payload.categoryIndex].attributes,
        {title: '', type: 'TEXT', id: generateUuid()},
      ];
    },
    removeAttribute(state, {payload}: PayloadAction<iRemoveAttributePayload>) {
      state.categories[payload.categoryIndex].attributes = state.categories[
        payload.categoryIndex
      ].attributes.filter(attr => attr.id !== payload.attribute.id);
    },
  },
});

export const useCategoriesActions = () => useActions(CategoriesState.actions);
