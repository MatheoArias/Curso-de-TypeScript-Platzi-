(()=>{
  let producTittle='my amazing product';// El motor de inferencia de forma implicita regresa esto como un strings
  let productPrice=100;
  let isNew:boolean= false;

  const productDescription="I'm bla bla bla";
  console.log('mi mensaje es: ',productDescription)

  const summary=`
  tittle:${producTittle}
  description:${productPrice}
  isNew:${isNew}`

})();
