//Aqui vamos a tener todas las declaraciones de tipado.
export type Sizes= 'S'|'M'|'L'|'XL';
import {Category} from "../category/category.model"
import { BaseModel } from "../base.model";

//Con herencia Extediendo el modelo Base a cada uno de las "Entidades"
export interface Product extends BaseModel  {
    title:string;
    image:string,
    description:string;
    stock:number;
    size?:Sizes;
    price:number|string;
    category:Category;
    isNew:boolean;
    tags:string[]
};

