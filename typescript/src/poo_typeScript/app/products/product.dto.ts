import { Product } from "./product.models";
import { Category } from "../category/category.models";

export interface CreateProductDto extends Omit<Product,'id'|'category'>{
  //Si cambia el tipo, el va a cambiar según el modelo que tengamos
  categoryId:Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto>{
}

