export class MyDate {
  year: number;
  month: number;
  day: number;
  // las variables se inicializan desde el contructor
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  };

  ///Vamos agregar los métodos que son comportamientos, funciones
  printFormat(): string {
    return `${this.year} / ${this.month} / ${this.day}`;
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

const myDate = new MyDate(1933, 12, 3);
console.log(myDate.printFormat());
// Se guarda el objeto y seguidamente se va modificando
myDate.add(5, 'days');
console.log(myDate.printFormat());//output: 1933 / 12 / 8
myDate.add(1, 'months');
console.log(myDate.printFormat()); //output: 1933 / 13 / 8

//Reto, cual sería un algorítmo interesante para operar fechas
