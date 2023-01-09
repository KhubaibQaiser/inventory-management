import {iCategory, iAttribute} from '@store/modules';

export interface iCategoryAttributeProps {
  attribute: iAttribute;
  index: number;
  onChange: iAttributeChangeHandler;
  onRemove: iRemoveAttributeHandler;
}

export interface iCategoryAttributesProps {
  categoryId: iCategory['id'];
  categoryIndex: number;
}

export interface iUseCategoryAttributesParams
  extends iCategoryAttributesProps {}

export type iAttributeChangeHandler = (
  attributeIndex: number,
  attribute: iAttribute,
) => void;
export type iRemoveAttributeHandler = (attributeIndex: number) => void;
