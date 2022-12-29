export interface iCategoriesState {
  categories: iCategory[];
}

export interface iCategory {
  id: string;
  title: string;
  titleAttribute: string;
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

export interface iRemoveCategoryPayload {
  category: iCategory;
}

export interface iAddAttributePayload {
  categoryIndex: number;
}

export interface iRemoveAttributePayload {
  categoryIndex: number;
  attribute: iAttribute;
}
