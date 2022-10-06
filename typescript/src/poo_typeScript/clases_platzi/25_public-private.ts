////A que se refiere por publico, que se puede acceder desde afuera a sus propiedades. Todo en js por defecto es público.
//Para hacerlas privadas, deberíamos poner Readonly y proteje de adentro y afuera

//para protejer las instancias internas de una clase deberíamos ponerlas como públicas.
//También el private se puede agregar a los métodos.
export class MyDate {
  year: number;
  month: number;
  private day: number;
  // las variables se inicializan desde el contructor
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  };

  ///Vamos agregar los métodos que son comportamientos, funciones
  printFormat(): string {
    const month=this.addPadding(this.month);
    const day=this.addPadding(this.day);
    return `${day}/${month}/${this.year}`;
  }
  private addPadding(value:number){
    if(value<10){
      return `0${value}`;
    }
    return `${value}`;
  }


  add(amount: number, types: 'days' | 'months' | 'years') {
    if (types === 'days') {
      this.day += amount;
    } else if (types === 'months') {
      this.month += amount;
    } else if (types === 'years') {
      this.year += amount;
    }
  }
};

const myDate = new MyDate(1933, 7, 10);
console.log(myDate.printFormat());
//myDate.addPadding() //La propiedad 'addPadding' es privada y solo se puede acceder a ella en la clase 'MyDate'
