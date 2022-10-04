//Esta parte del código es lo que conocemos por sobrecarga
//En conclusión, lo que vamos a hacer es escribir de nuevo la función con los parámetros y su tipo de dato de retorno antes de declarar la función como tal, para que de esa forma TS sepa en que casos se retorna cierto valor.

///El problema está en que cuando paso un parámetro no sabe si es un array o es un string, entonces en ese caso utilizamos la sobrecarga de funciones.

//Aquí solo estamos poniendo el código
export function parseStr(input:string): string[];
export function parseStr(input:string[]): string;

//Párametros de entrada(input:string|string[]), parametro de retorno string|string[]
export function parseStr(input:string|string[]):string|string[]{
  //necesito utilizar acerción de tipos para reolver el algorítmo
  if(Array.isArray(input)){
    return input.join();// output: string
  }else{
    return input.split(''); //output: string[]
  }
}

//TypeScript no puede inferir que tipo de dato puede retornar, el algoritmo funciona por antes hicimos una acerción de tipo.
// para esto usamemos la sobrecarga de funciones
const rtaArray=parseStr('Mateo');
console.log('rtaArray',rtaArray);

const rtaStr=parseStr(['M','a','t','e','o']);
console.log('rtaStr',rtaStr);

//Unas buenas practicas es dejar al final un unknows
//Fijarse si es necesario una sobre carga
// Si es necesario, es mejor usar union Types
