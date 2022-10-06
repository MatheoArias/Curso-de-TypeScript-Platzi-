//Los contructores también tiene un Acceso
export class MyService{

  static instance:MyService|null=null
  private constructor(private name:string){}

  getName(){
    return this.name;
  }
  static create(name:string){
    if(MyService.instance==null){
      console.log('una vez')
      MyService.instance=new MyService(name)
    }
  }
}

//De esta manera con el primero se crea la instancia y luego sigue siendo el mismoobjeto
//Se crea la el objeto
const myService1=MyService.create('Service1');
//Regresa el mismo objeto.
const myService2=MyService.create('Service2');



//Salen del mismo modelo y la misma clase, pero son dos objetos diferentes.
console.log(myService1===myService2);//ouput:False

