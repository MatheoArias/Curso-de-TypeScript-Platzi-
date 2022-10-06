//npm install class-validator --save
//Decorador comienza en mayúscula y una función comienza en minúscula.
//Los decoradores viene definimos por @decorador, Agregan funcionalidades o validaciones extras.
import { Category } from "./category.models";
import { AccesType } from "./category.models";
import {IsEnum, IsNotEmpty, IsOptional, IsUrl, validateOrReject} from 'class-validator'

export interface ICreateCategoryDto extends Omit<Category,'id'>{}
export class CreateCategoryDto implements ICreateCategoryDto{
  //Los decoradores no llevan punto y coma al final
  @IsNotEmpty()
  name!: string; // con el signo de admiración digo que lo voy a inicializar en otra ocación

  @IsUrl()
  @IsNotEmpty()
  image!:string;

  @IsOptional()
  @IsEnum(AccesType)
  acces?:AccesType | undefined;
}

(async()=>{
  try{
    const dto=new CreateCategoryDto();
    dto.name='a';
    await validateOrReject(dto)
    //La validación solo va a genrar una alerta cuando se rompre con lagun @decorador.
    //Uno puede @DECORAR un clase, un propiedad o un método.
  }catch(error){
    console.log(error)
  }
})();

//Los decoradores no tiene feedback instantabe, solo lo hacen en runtime

