import {useSelector, shallowEqual} from 'react-redux';
import {
  iInventoriesState,
  iInventory,
  InventoryAttributeValueType,
  iInventoryAttribute,
} from './types';
import {AppStateType} from '../../store';
import {iCategory, useCategoryTitleAttribute} from '../Categories';
import {useMemo} from 'react';

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

export const useInventoriesIdsListByCategoryId = (
  categoryId: iCategory['id'],
): iInventory['id'][] => {
  const inventories = useSelector(selfStateSelector, shallowEqual);
  const inventoryIds = useMemo(
    () => inventories[categoryId].map(inv => inv.id),
    [inventories, categoryId],
  );
  if (!categoryId) {
    return [];
  }
  return inventoryIds;
};

export const useInventoryAttributes = (
  categoryId: iCategory['id'],
  inventoryId: iInventory['id'],
): iInventoryAttribute => {
  const inventories = useInventoriesByCategoryId(categoryId);
  const inventory = useMemo(() => {
    return inventories.find(inv => inv.id === inventoryId);
  }, [inventories, inventoryId]);

  return inventory?.attributes || {};
};

export const useInventoryTitle = (
  categoryId: iCategory['id'],
  inventoryId: iInventory['id'],
): InventoryAttributeValueType => {
  const titleAttribute = useCategoryTitleAttribute(categoryId);
  const attributes = useInventoryAttributes(categoryId, inventoryId);
  if (!titleAttribute) {
    return '-';
  }
  return attributes[titleAttribute.id];
};
