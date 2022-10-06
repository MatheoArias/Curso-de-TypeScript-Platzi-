import { Category } from "../category/category.models";

export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  images:      string[];
}
