(()=>{
  //Esta es la forma de crear un union types, es defnir y crear mi propio tipo de dato.
  //"userId" puede ser un string o un número
  let userId:number|string
  userId=27 // Esto seria de tipo número
  userId='Mateo' // Esto sería de tipo String

  function greeting(myText:string|number){
    if(typeof myText=='string'){
        console.log(`string ${myText.toLowerCase()}`)
    }else{
      console.log(`string ${myText.toFixed(1)}`)
    }
  }
  greeting("Hola soy Mateo")
  greeting(12587)
})();
