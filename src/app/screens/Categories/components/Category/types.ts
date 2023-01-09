import {iCategory} from '@store/modules';

export interface iCategoryProps {
  categoryId: iCategory['id'];
  categoryIndex: number;
}

export interface iUseCategoryParams extends iCategoryProps {}

export type iRemoveCategoryHandler = (categoryIndex: number) => void;
export type iChangeCategoryHandler = (category: iCategory) => void;
export type iAddAttributeHandler = () => void;
