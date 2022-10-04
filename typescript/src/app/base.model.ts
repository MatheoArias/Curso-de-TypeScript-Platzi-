import { Product } from "./products/product.model";

//Concreate only, establezco que la variable es de solo lectura y no se puede sobreescribir
export interface BaseModel{
  readonly id:string|number;
  createAt:Date;
  updateAT:Date;
}

