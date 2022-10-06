import { Product } from "./product.models";
import { CreateProductDto, UpdateProductDto} from "./product.dto";
import { faker} from '@faker-js/faker';
import { product } from "../../../clases_platzi/22_interfaces";
import { ProductService } from "../product-service/product-service.models";


/// En esta parte todos los porductos los estamos creando de la librearia faker, con datos aleatorios
/// Migramos las funciones a clases (Las funciones de ;a app anterior)
/// Con la palabra reservada "implements" implementamos una interfaz a una clase.
export class ProductMemoryService implements ProductService{
  private products:Product[]=[];
  // Método para RETONAR todos los Objetos
  getAll(){
    return this.products
  }
  //Método para CREAR un nuevo objeto y RETORNARLO
  create(data:CreateProductDto):Product{
    const newProduct={
      ...data,
      id:faker.datatype.number(),
      category:{
        id:data.categoryId,
        name:faker.commerce.department(),
        image:faker.image.imageUrl()
      }
    }
    return this.add(newProduct)
  };

  //Método para agregar un producto
  add(product:Product){
    this.products.push(product);
    return product;
  }

  update(id:Product['id'],changes:UpdateProductDto):Product{
    const index=this.products.findIndex(item=>item.id===id);
    const prevData=this.products[index];
    this.products[index]={
      ...prevData,
      ...changes
    }
    return this.products[index];
  }

  //"Necesito buscar un id que sea del mismo id del producto"
  findOne(id:Product['id']){
    return this.products.find(item=>item.id===id)
  }
};

