import {iCategory, iAttribute} from '../../../../../data/store/modules';

export interface iCategoryProps {
  categoryId: iCategory['id'];
  categoryIndex: number;
}

export interface iUseCategoryParams extends iCategoryProps {}

export type iRemoveCategoryHandler = (categoryIndex: number) => void;
export type iChangeCategoryHandler = (category: iCategory) => void;
export type iAddAttributeHandler = () => void;

export interface iCategoryAttributeProps {
  attribute: iAttribute;
  index: number;
  onChange: iAttributeChangeHandler;
  onRemove: iRemoveAttributeHandler;
}

export type iAttributeChangeHandler = (
  attributeIndex: number,
  attribute: iAttribute,
) => void;
export type iRemoveAttributeHandler = (attributeIndex: number) => void;
