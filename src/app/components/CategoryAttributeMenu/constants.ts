import {iCategoryAttributeItem} from './types';
import {AttributeEnum} from '../../../data/store/modules';

export const AttributeTypeOptions: iCategoryAttributeItem[] = [
  {key: 'TEXT', value: AttributeEnum.TEXT},
  {key: 'NUMBER', value: AttributeEnum.NUMBER},
  {key: 'BOOLEAN', value: AttributeEnum.BOOLEAN},
  {key: 'DATE', value: AttributeEnum.DATE},
];
