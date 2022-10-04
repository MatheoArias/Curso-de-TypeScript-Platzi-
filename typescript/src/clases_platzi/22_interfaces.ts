export type Sizes= 'S'|'M'|'L'|'XL';

// esto es la manera de tipo type
export type userId=string|number // Con type se pueden hacer estas cosas que son mas puntuales.
export type product={
  tittle:string,
  createAt:Date,
  stock:number,
  size?:Sizes
};

///Las interfaces se deben definir con todo un cuerpo
//las Interfaces se pueden heredar
//Es posible dentro de una interface tener elementos anidados
export interface Product {
    tittle:string,
    createAt:Date,
    stock:number,
    size?:Sizes
};

