/// Métodos Estáticos y Porpiedades Estáticas
console.log( 'Versión de js: ',Math.PI)// 3.1416
console.log(Math.max(1,2,3,4,5,6,7,8)) //output : 8

//Voy a crear mi propia versión de la librería map
class MyMath{
  static readonly PI=3.1416;
  //todos los números que me pasen los voy a convertir en un array de números
  static max(...numbers:number[]){
      console.log(numbers);
      return numbers.reduce((max,item)=>max>=item?max:item,0)
      // Como solucionar este error de que cuando pongo valores negativos, no funciona
  }
}

//El atributo cuando esta precedido de la palabra reservada "static" no tenemos que instanciarlo para poderlo llamar, y con 'readonly' hacemos que solo sea lectura y no lo podamos moficar.
console.log('MyMath_PI: ', MyMath.PI)
console.log('MyMath_MAX: ', MyMath.max(1,2,3,4,5,6,7,8))
