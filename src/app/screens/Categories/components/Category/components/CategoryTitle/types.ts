import {iCategory} from '../../../../../../../data/store/modules';

export interface iCategoryTitleProps {
  categoryId: iCategory['id'];
  categoryIndex: number;
}

export interface iUseCategoryTitleParams extends iCategoryTitleProps {}
