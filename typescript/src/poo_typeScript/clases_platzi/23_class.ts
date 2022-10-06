//Date es una clase
const date=new Date();
date.getHours();
date.getTime();date.toISOString();

const date2=new Date(1993,1,12); //donde 0 es Enero

//Las variables dentro de las clases tienen un "Scope" de bloque;
//las variables por buena práctica se inicializan por buenas prácticas;
export class MyDate{
  year:number;
  month:number;
  day:number;
  // las variables se inicializan desde el contructor
  constructor(year:number,month:number,day:number){
    this.year=year;
    this.month=month;
    this.day=day;
  };
};

// Esto es una instancia
const myDate= new MyDate(2021,3,13)
console.log(myDate);
