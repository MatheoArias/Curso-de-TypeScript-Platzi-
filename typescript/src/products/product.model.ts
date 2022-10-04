// En los models se pone todo lo que tenga que ver con el tipado de los objetos

export type Sizes= 'S'|'M'|'L'|'XL';

export type product={
    tittle:string,
    createAt:Date,
    stock:number,
    size?:Sizes
};
