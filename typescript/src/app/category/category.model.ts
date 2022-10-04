import { BaseModel } from "../base.model";

//Aquí creo las subcategorias (son como subobjetos)
export interface Category extends BaseModel{
  name:string;
}
