//Cuando establezco la función de esta manera obligo a typeScript que me infiera el tipado,
//Entonces luego cuando vaya a ejecutar la función lo que debería de hacer en inferir el tipo antes enttre "<>"
import axios from "axios";
import { Product } from "../app/products/product.models";
import { Category } from "../app/category/category.models";
import { UpdateProductDto } from "../app/products/product.dto";

///myType es el nombre de la "variable"
function getValue<myType>(value:myType){
  return value
}

// Dependiendo del valor que yo pase, me va hacer la inferencia.
getValue<number>(12).toFixed(); // return number
getValue<string>('12').toLowerCase(); //return string
getValue<number[]>([]).map(item=>item); //return arrays

export class BaseHttpService<TypeClass>{
  constructor(
    private url :string
  ){}

  async getAll(){
    const {data}=await axios.get<TypeClass[]>(this.url);
    return data;
  }
  //Recordar que puedo poner cualesquier nombre al tipado, lo importante es llamar los parámetros de las misma manera.
  async update<ID,DTO>(id: ID, changes: DTO) {
    ///El Método para acutualizar sería con put
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

(async()=>{
  const url1='https://api.escuelajs.co/api/v1/products'
  const ProductService=new BaseHttpService<Product>(url1);
  const productos=await ProductService.getAll();
  console.log('Cantidad de productos: ', productos.length);
  ProductService.update<Product['id'],UpdateProductDto>(1,{
    title:'Esto es un nombre cambiado '
  });

  const url2='https://api.escuelajs.co/api/v1/categories'
  const categoryService=new BaseHttpService<Category>(url2);
  const categorias= await categoryService.getAll();
  console.log('Cantidad de Categorias: ', categorias.length);

})();




// const service=new BaseHttpService<string>();
// service.getAll() //Retornar un String

// const service1=new BaseHttpService<number>();
// service1.getAll() ///Retornar un Number
