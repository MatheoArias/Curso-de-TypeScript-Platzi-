// Nunca retorna un Void
//Nos sirve para ejecutar un método y desde afuera consumirlo como una propiedad.
//Set Es parecido a un get, solo que este no retorna nada, es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error. Set lo podemos usar para tener reglas de modificación para nuestros parámetros.

export class MyDate {
  constructor(
    public year: number=1993,
    public month: number=9,
    private day: number=8
  ){};

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
  };
  // Es una función que accede a el valor interno de una función (una variable privada).
  // Accedemos pero no podemos hacer una modifcación.
  //Todos los getters deberian retornar algo, si no retorna algo le va a dar un valor.
  get Day(){
    return this.day
  }
  //No se ejecuta, selee como si fuera una propiedad ya adquirida
  get isLeapYear():boolean{
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
  set Month(newValue:number){
    if(newValue>=1 && newValue<=12){
      this.month=newValue;
    }else{
      throw new Error('month out of range')
    };
  };
};

const myDate = new MyDate(1933, 7, 10);
console.log(myDate.printFormat());
console.log(myDate.Day);
console.log(myDate.isLeapYear);

//No lo modifica solo lee el valor y ejecuta el código
const myDate2=new MyDate(2000,7,10)
console.log('2000',myDate2.isLeapYear)

