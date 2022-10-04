(()=>{
  let productPrice=100;
  productPrice=12;
  console.log('product price: ', productPrice);

  //Llamar una variable de forma explícita
  //Si no pasamos un número, sale por error: El tipo 'string' no se puede asignar al tipo 'number'
  let customerAge:number=28;
  customerAge=customerAge + 1; //output: 281

  //El motor de inferencia nos va a mostrar: La variable 'productInStock' se usa antes de asignarla, porque no he asignado ningún valor.
  let productInStock:number;
  console.log('productInStock: ',productInStock);

  //El motor de inferencia nos regresa en la variable 'discount' como un number
  let discount=parseInt('123456789')
  console.log('el numero que convertimos es: ',discount)

  let hex=0xfff;
  console.log('El color es: ',hex=0xfff)

  //El tipado para números es number en minúscula no en mayúscula.

})()
