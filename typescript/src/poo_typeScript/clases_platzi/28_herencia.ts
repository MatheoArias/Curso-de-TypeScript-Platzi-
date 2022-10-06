//protected es un privado que va tener herencia. Solo se puede utilizar de forma interna, pero además se puede utilizar de forma interna

export class Animal{
  constructor(
    protected name: string,
  ){};

  move(){
    console.log(`${this.name} camina Animal Padre !`)
  };
  greeting(){
    return `hellom I'm ${this.name}`
  };
  protected doSomething(){
    console.log(`Doooooo`)
  };
}

// Aquí estamos extendiendo Métodos
export class Dog extends Animal{
  constructor(
  public owner: string,
  name:string,
  ){
    ///Cuando agrego atributos a la clase hijo, debo hacer referencia de los atributos de la clase padre con la palabra reservada "super"
    //No se define una propiedad interna, solo se define en el contructor.
    //Aquí estamos llamando al constructor de la clase padre, solo lo podemos llamar desde el constructor del hijo. No se puede llamar desde un Método
    super (name)
  };
  //Cuantas veces quiere que ladre
  woof(times:number){
      for(let index =0;index<times;index++){
        console.log(`Woooffff!! ${this.name}`)
        this.doSomething();// Solo puedo acceder a ella desde los métodos de la clase hijo, pero no lo hace directamente
      }
    }
  move(): void {
      console.log(`${this.name} Camina Animal Hijo`)
      super.move();
  }
}

///Ejemplo de Clase padre Animal;
//Creo un nuevo objeto de la clase Animal;
const fifi= new Animal('fifi');
//Solo si retorna algo se pone console.log()
fifi.move();
console.log(fifi.greeting());

//Ejemplo de clase hija Perro
///RECUERDE QUE SOLO SE LE PONE CONSOLE A LAS COSAS QUE TENGAN RETURN.
const firulais=new Dog('firulais','Mateo');
console.log(firulais.greeting());
//Aquí estoy extendiendo Métodos.
firulais.woof(1);
//firulais.doSomething() // Ya no se puede acceder al método desde afuera.
// Primero corre el Método del hijo y luego corre el Método del padre
firulais.move(); //Output: Mateo Camina Animal Hijo;
                         //Mateo camina Animal Padre;
//Lo que hizo el profe con el método move() es polimorfismo, es reescribir el método que adopta otro comportamiento en la clase hija, pero en este caso, este outro comportamiento es un agregado de funcionalidad `adicional antes de su ejecucíon por eso al final llama al move() del padre con super()
