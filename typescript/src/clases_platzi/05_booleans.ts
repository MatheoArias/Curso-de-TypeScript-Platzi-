(()=>{
  let isEnable=true;
  isEnable=false;

  // tipado de forma explícita
  let isNew:boolean= false;
  console.log('isNew:', isNew);
  isNew = true; //No se puede volver a declarar la variable, solamente se deberia reasignar el valor.
  console.log('isNew: ', isNew)

  const random=Math.random();
  console.log('random',random);
  isNew=random>=0.5?true:false;
  console.log('isNew',isNew)

})();
