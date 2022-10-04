// Alias es crear un prototipo para poder seguir usando el tipo de variable en varias partes
// Creo mi prototipo "UserID" este puede ser de dos tipos number o string
(()=>{
  //Luego creo la variable a la que le asigno le type de "UserID"
  type UserID=number|string;
  let userId:UserID;

  type Size='S'|'M'|'L'|'XL';
  let shirtSizes:Size;

  function greeting(userId:UserID,shirtSizes:Size){
    if(typeof userId=='string'){
        console.log(`string ${userId.toLowerCase()}`)
    }
  }
  greeting('MI NOMBRE ES MATEO','S')

})()
