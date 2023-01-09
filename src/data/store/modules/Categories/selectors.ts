import {useSelector, shallowEqual} from 'react-redux';
import {iCategory, iCategoriesState, iAttribute} from './types';
import {AppStateType} from '../../store';

const selfStateSelector = (state: AppStateType): iCategoriesState =>
  state['categories-state'];

export const useCategoriesList = () =>
  useSelector(selfStateSelector, shallowEqual).categories;

export const useCategoryIdsList = () => {
  const categories = useCategoriesList();
  return categories.map(categ => categ.id);
};

export const useCategoriesRoutes = (): iCategory[] => {
  const categories = useCategoriesList();
  const uniqueCategories: Record<string, iCategory> = {};
  categories.forEach(category => {
    if (category.title.length > 0 && !uniqueCategories[category.title]) {
      uniqueCategories[category.title] = category;
    }
  });
  return Object.values(uniqueCategories);
};

export const useCategoryById = (
  categoryId: iCategory['id'] | undefined | null,
): iCategory | null => {
  const categories = useCategoriesList();
  if (!categoryId) {
    return null;
  }
  return categories.find(category => category.id === categoryId) ?? null;
};

export const useCategoryTitleAttribute = (
  categoryId: iCategory['id'],
): iAttribute | null => {
  const category = useCategoryById(categoryId);
  return (
    category?.attributes.find(attr => attr.id === category.titleAttributeId) ||
    null
  );
};

export const useCategoryTitle = (
  categoryId: iCategory['id'],
): iCategory['id'] => {
  const category = useCategoryById(categoryId);
  return category?.title || '-';
};

export const useCategoryAttributes = (
  categoryId: iCategory['id'],
): iAttribute[] => {
  const category = useCategoryById(categoryId);
  return category?.attributes || [];
};
