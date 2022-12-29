export interface iInventoryCategory {
  title: string;
  attributes: iAttribute[];
}

export type AttributeType = 'date' | 'text' | 'checkbox' | 'number';
export interface iAttribute {
  type: AttributeType;
  value: string | number | boolean;
}
