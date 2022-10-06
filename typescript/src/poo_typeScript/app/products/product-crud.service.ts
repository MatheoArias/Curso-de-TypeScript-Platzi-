import axios from "axios";
import { Product } from "./product.models";
import { UpdateProductDto } from "./product.dto"
import { BaseHttpService } from "../../clases_platzi/34_generics";

export class ProductCRUDService{
  private url='https://api.escuelajs.co/api/v1/products'
  private http=new BaseHttpService<Product>(this.url);

  async update(id:Product['id'],dto:UpdateProductDto){
    //permisos
    //logica
    return this.http.update(id,dto);
  }
}

