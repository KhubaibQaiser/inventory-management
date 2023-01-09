import {iCategory} from '@store/modules';

export interface iTitleFieldButtonProps {
  categoryId: iCategory['id'];
  categoryIndex: number;
}

export interface iUseTitleFieldButtonParams extends iTitleFieldButtonProps {}
