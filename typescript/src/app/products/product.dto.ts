import { Product } from "./product.model";

//Los dto tienen que tener su carpeta por aparte, recordar que es una entidad creada apartir de otra entidad.
//Utilities Types, esto va a crear un nuevo tipo omitiendo los campos dentro de "<>"
//Pick<Product,'id'|'createdAt'|'updatedAt'|'category'> En vez de omitirlos los escojo
export interface CreateProductDto extends Omit<Product,'id'|'createdAt'|'updatedAt'|'category'>{
  categoryId:string;
}

// En vexz de crear una nueva interface creo una entidad con todos lo atributos como opcionales.
// Required<CreateProductDto> es lo contrario, todo lo pone requerido
export interface UpdateProductDto extends Partial<CreateProductDto>{

}

//De esta manera pongo todos los parámetros solo de lectura.
//solo con readonly me permite hacer metodos de mutación
export interface findProductDto extends Readonly<Partial<Omit<Product,'tags'>>>{
  readonly tags:ReadonlyArray<string>;
}
//Lo pone solo de lectura y no me deja modificarlo con los Métodos
