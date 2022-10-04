(()=>{
  let prices=[1,2,3,1,2,22,'hola',true];
  prices.push(1,5,8,7)

  //Esta es la forma explícita para poder saber que valores van a entrar en el array.
  let mixed:(number|string|boolean)[]=['hola',true];
  mixed.push(12)
  console.log(mixed)

})();
