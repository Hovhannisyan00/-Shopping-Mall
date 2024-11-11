import { ICategory } from './category';

export interface IProduct {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  category?: ICategory;
  SKU: string;
}
