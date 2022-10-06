import { ProductService } from '../product-service/product-service.models';
import { UpdateProductDto, CreateProductDto } from './product.dto';
import { Product } from './product.models';
import axios from 'axios';

///En este caso estamos trayendo todos los datos desde una ApiRest ya creada
export class productHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  //En cada uno de los Método dejamos que infiera el tipado de la interface de ProductService que ya habíamos Creado.
  async getAll() {
  //La traigo data  de forma destructurada, de esa manera no la tengo que traer de alguna variable
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }
  // Con el método pur modificamos el objeto
  async update(id: number, changes: UpdateProductDto) {
    /// El Método para acutualizar sería con put
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
  //Por medio de un POST creamos el nuevo objeto
  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this.url, dto);
    return data;
  }
  /// Con el Método GET buscamos el objeto
  async findOne(id: number) {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}
