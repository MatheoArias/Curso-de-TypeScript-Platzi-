import { Product } from "./product.model";
import { CreateProductDto, findProductDto, UpdateProductDto} from "./product.dto";
import { faker} from '@faker-js/faker';

/// Aqui voy a incluir todos los métodos que hacen manipulación
export const products: Product[]=[];
export const addProducts=(data:CreateProductDto):Product=>{
  //Esto normalmente lo hace una base de datos.
  //Los tres puntos antes de "data" es un "spread operator"
  const newProduct={
    ...data,
    id:faker.datatype.uuid(),
    createdAt:faker.date.recent(),// fecha reciente
    updateAt:faker.date.recent(),
    category:{
      id:data.categoryId,
      name:faker.commerce.department(),
      createAt:faker.date.recent(),// fecha reciente
      updateAT:faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

//ya solamnete puedo enviar el campo que necesito cambiar y no me genera error, porque es mas flexible.
// De esta manera podemos obtener el tipado de estas variables para poder mantener la consistencia
export const updateProduct=(id:Product['id'],changes:UpdateProductDto):Product=>{
  const index=products.findIndex(item=>item.id===id);
  const prevData=products[index];
  products[index]={
    ...prevData,
    ...changes
  }
  return products[index];
}

///Como manipular todo esto en memoria.
export const findProduct=(dto:findProductDto):Product[]=>{
  //Como es opcional entonces por eso se usa el "optional"
  return products
}

//readonlyArray, sirve para evitar las mutaciones de arrays, que no se modifique y sea solo de lectura.
//No me deja usar metodos de arrays que me hacen mutaciones a los arrays.
//en fronted se crea nuevos estados en vez de crear un array original.
