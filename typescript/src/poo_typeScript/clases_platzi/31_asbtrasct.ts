export abstract class Animal{
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
    super (name)
  };
  //Cuantas veces quiere que ladre
  woof(times:number){
      for(let index =0;index<times;index++){
        console.log(`Woooffff!! ${this.name}`)
        this.doSomething();
      }
    }
  move(): void {
      console.log(`${this.name} Camina Animal Hijo`)
      super.move();
  }
}

// No de puede crar una instancia directamente de la clase.
// const fifi= new Animal('fifi');
// fifi.move();
// console.log(fifi.greeting());

//Pero si se puede crear una Intancia de una clase que hereda de la clase abstracta padre.
//Se restringe la modifcación de los elementos de la clase padre.
const firulais=new Dog('firulais','Mateo');
console.log(firulais.greeting());

firulais.woof(1);
firulais.move();
