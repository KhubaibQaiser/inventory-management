import {iCategory, iAttribute} from '../../../../../data/store/modules';

export interface iCategoryProps {
  category: iCategory;
  onChange: iChangeCategoryHandler;
  onRemoveCategory: iRemoveCategoryHandler;
  onAddAttribute: iAddAttributeHandler;
  onRemoveAttribute: iRemoveAttributeHandler;
}

export type iRemoveCategoryHandler = (category: iCategory) => void;
export type iChangeCategoryHandler = (category: iCategory) => void;
export type iAddAttributeHandler = () => void;

export interface iCategoryAttributeProps {
  attribute: iAttribute;
  onChange: iAttributeChangeHandler;
  onRemove: iRemoveAttributeHandler;
}

export type iAttributeChangeHandler = (attribute: iAttribute) => void;
export type iRemoveAttributeHandler = (attr: iAttribute) => void;
