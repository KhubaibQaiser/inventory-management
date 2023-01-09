import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  iCategoriesState,
  iAddAttributePayload,
  iRemoveAttributePayload,
  iRemoveCategoryPayload,
  iChangeCategoryTitlePayload,
  iChangeAttributePayload,
  iCategory,
  iSetTitleAttributeIdPayload,
} from './types';
import useActions from '../../utils/useActions';
import {generateUuid} from '../../utils/string.utils';

const initialCategoriesState: iCategoriesState = {
  categories: [],
};

const getCategoryInitialValues = (): iCategory => {
  return {
    title: 'Category',
    titleAttributeId: '',
    attributes: [{id: generateUuid(), title: 'Field', type: 'TEXT'}],
    id: generateUuid(),
  };
};

export const CategoriesState = createSlice({
  name: 'categories-state',
  initialState: initialCategoriesState,
  reducers: {
    addCategory(state) {
      state.categories.push(getCategoryInitialValues());
    },
    removeCategory(state, {payload}: PayloadAction<iRemoveCategoryPayload>) {
      state.categories.splice(payload.categoryIndex, 1);
    },
    changeCategoryTitle(
      state,
      {payload}: PayloadAction<iChangeCategoryTitlePayload>,
    ) {
      state.categories[payload.categoryIndex].title = payload.title;
    },
    addAttribute(state, {payload}: PayloadAction<iAddAttributePayload>) {
      state.categories[payload.categoryIndex].attributes = [
        ...state.categories[payload.categoryIndex].attributes,
        {title: '', type: 'TEXT', id: generateUuid()},
      ];
    },
    removeAttribute(state, {payload}: PayloadAction<iRemoveAttributePayload>) {
      state.categories[payload.categoryIndex].attributes.splice(
        payload.attributeIndex,
        1,
      );
    },
    changeAttribute(state, {payload}: PayloadAction<iChangeAttributePayload>) {
      state.categories[payload.categoryIndex].attributes[
        payload.attributeIndex
      ] = payload.attribute;
    },
    setTitleAttributeId(
      state,
      {payload}: PayloadAction<iSetTitleAttributeIdPayload>,
    ) {
      state.categories[payload.categoryIndex].titleAttributeId =
        payload.attributeId;
    },
  },
});

export const useCategoriesActions = () => useActions(CategoriesState.actions);
