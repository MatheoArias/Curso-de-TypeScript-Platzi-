/// Agrego la funciónes el los servicios
import {product} from './product.model';

export const products:product[]=[];

export const addProducts=(data:product)=>{
  products.push(data)
}

// Fución para calcular los productos en Stock
export const calcStock=():number=>{
  let total=0;
  products.forEach((item)=>{
    total+=item.stock;
  });
  return total
}
