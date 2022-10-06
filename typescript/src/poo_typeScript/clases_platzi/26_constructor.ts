export class MyDate {
  //Esta sería la forma corta de definir un constructor;
  //Definiendo y Asignando;
  // Toca ser explicito, de otra manera no funciona (public o private);
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
  }
};

const myDate = new MyDate(1933, 7, 10);
console.log(myDate.printFormat());
