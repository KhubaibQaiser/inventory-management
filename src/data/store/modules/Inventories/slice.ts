import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  iInventoriesState,
  iAddInventoryPayload,
  iChangeInventoryAttributePayload,
  iRemoveInventoryPayload,
} from './types';
import useActions from '../../utils/useActions';
import {generateUuid} from '../../utils/string.utils';

const initialInventoriesState: iInventoriesState = {
  // 'd9142342-7fa1-41cb-ad74-9dbaa943e8f1': [
  //   {
  //     id: 'hello-inventory-id',
  //     categoryId: 'd9142342-7fa1-41cb-ad74-9dbaa943e8f1',
  //     title: 'Civic',
  //     attributes: {},
  //   },
  // ],
};

export const InventoriesState = createSlice({
  name: 'inventories-state',
  initialState: initialInventoriesState,
  reducers: {
    addInventory: (
      state,
      {payload: {categoryId}}: PayloadAction<iAddInventoryPayload>,
    ) => {
      if (!state[categoryId]) {
        state[categoryId] = [];
      }
      state[categoryId] = [
        ...state[categoryId],
        {
          id: generateUuid(),
          title: 'Unnammed',
          categoryId,
          attributes: {},
        },
      ];
    },
    changeInventoryAttribute: (
      state,
      {
        payload: {categoryId, inventoryIndex, attributeId, value},
      }: PayloadAction<iChangeInventoryAttributePayload>,
    ) => {
      state[categoryId][inventoryIndex].attributes[attributeId] = value;
    },
    removeInventory: (
      state,
      {payload: {categoryId, index}}: PayloadAction<iRemoveInventoryPayload>,
    ) => {
      state[categoryId].splice(index, 1);
    },
  },
});

export const useInventoriesActions = () => useActions(InventoriesState.actions);
