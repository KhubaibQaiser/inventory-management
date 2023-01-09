export interface iCategoriesState {
  categories: iCategory[];
}

export type CategoryTitleAttributeId = string;

export interface iCategory {
  id: string;
  title: string;
  titleAttributeId: CategoryTitleAttributeId;
  attributes: iAttribute[];
}

export enum AttributeEnum {
  'DATE' = 'Date',
  'TEXT' = 'Text',
  'NUMBER' = 'Number',
  'BOOLEAN' = 'Boolean',
}
export type AttributeType = keyof typeof AttributeEnum;
export interface iAttribute {
  id: string;
  title: string;
  type: AttributeType;
}
export type iAttributePayload = Omit<iAttribute, 'id'>;

// ACTION PAYLOADS
export interface iUpdateCategoryPayload {
  category: iCategory;
  index: number;
}

export interface iChangeCategoryTitlePayload {
  categoryIndex: number;
  title: string;
}

export interface iRemoveCategoryPayload {
  categoryIndex: number;
}

export interface iAddAttributePayload {
  categoryIndex: number;
}

export interface iRemoveAttributePayload {
  categoryIndex: number;
  attributeIndex: number;
}

export interface iChangeAttributePayload {
  categoryIndex: number;
  attributeIndex: number;
  attribute: iAttribute;
}

export interface iSetTitleAttributeIdPayload {
  categoryIndex: number;
  attributeId: iAttribute['id'];
}
