import {iCategory} from '../../../../../../../data/store/modules';

export interface iCategoryAttributesProps {
  categoryId: iCategory['id'];
  categoryIndex: number;
}

export interface iUseCategoryAttributesParams
  extends iCategoryAttributesProps {}
