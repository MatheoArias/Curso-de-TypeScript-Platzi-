import axios from "axios";
import { Product } from "./products/product.models"
import { ProductMemoryService } from "./products/product.service";


/// Por eso en este main las cosas están creadas de forma manual
const productService=new ProductMemoryService();

productService.create({
  title:'productoUno',
  price:100,
  description:'Estoy creando mi primer producto',
  categoryId:12,
  images:[]
});

const products= productService.getAll();
const productId=products[0].id;

productService.update(productId,
  {
    title:'Este es otro Nombre'
  });
const rta= productService.findOne(productId);
console.log(rta);

