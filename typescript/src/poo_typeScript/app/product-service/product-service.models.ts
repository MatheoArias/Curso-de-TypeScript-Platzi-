import { Product } from "../products/product.models";
import { UpdateProductDto,CreateProductDto } from "../products/product.dto";

export interface ProductService{
  //Reglas de los Métodos
  getAll():Product[] | Promise<Product[]>,
  update(id:Product['id'],changes:UpdateProductDto):Product | Promise<Product>,
  create(dto:CreateProductDto):Product | Promise<Product>,
  findOne(id:Product['id']):Product|undefined | Promise<Product|undefined>,

  //Me regresas algo asíncrono que internamente  me regrese una promesa
}
