// La interface nos sirve tanto para tipar método como atributos.

export interface Driver{
  database:string;
  password:string;
  port:number;

  // Aquí indico como se llama el método y el valor que retorna
  connect():void
}

//Intancio la interface Driver
//Sale un error porque no tenemos el método connect
// const driver :Driver={
//   database:'',
//   password:'',
//   port:23
// }

// con la palabra clave 'implements' utilizamos una interface, sería como un contrato para que todos los parámetros pasen como están en la interface
//Esta es la clase con la que definimos como se conecta postgress

class PostgresDriver implements Driver{
  constructor(
    public database:string,
    public password:string,
    public port:number
  ){}
  connect(): void {
      //Code
  }
}
