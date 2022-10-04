////Relizamos aqui el uso del servicio.
import {addProducts, products, updateProduct} from "./products/product.service";
//Es una libreria que me ayuda a generar datos aleatorios para hacer testing o probar ciertas cosas.
import { faker} from '@faker-js/faker';

///En esta línea de Código voy a generar 50 productos
for (let index = 0; index < 50; index++) {
  addProducts({
    description:faker.commerce.productDescription(),
    title:faker.commerce.productName(),
    createAt:faker.date.recent(),
    updateAT:faker.date.recent(),
    stock:faker.datatype.number({min:10,max:100}),
    image:faker.image.imageUrl(),
    price:faker.commerce.price(),
    isNew:true,
    size:"XL",
    categoryId:faker.datatype.uuid(),
    tags:['s','as']
  }
  )
  console.log(products)
  const product=products[0];
  updateProduct(product.id,{
    title:"New title",
    stock:80,
  })
}



