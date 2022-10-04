(()=>{
//let myNumber: number=undefined;
//ley my string:string =null;

/// No podemos declarar el null/undefined desde el comienzo, deberíamos hacerlo desde la declaración del type
let myNumber:number|null=null;
myNumber=12;

let myString:string|undefined=undefined;
myString='Hola Mundo';

function hi(name:string|null){
  let hello="hola";
  if(name){
    hello+= ' name'.toUpperCase()
  }else{
    hello += " nobody"
  }
  console.log(hello)
}

//Con el opcional chaining "?" nos sirve para identificar  si un valor es null o no.
hi('Mateo');
hi(null)

})();
