(()=>{
  // ¿Qué es lo que estoy buscando?
  //Cuando ejecute login (en vez de enviar parámetro por parámetro) envio un objeto con la "key" adecuada.
  //Tenemos que data es un objeto.
  const login=(data:{email:string,password:string})=>{
    console.log(data.email,data.password)
  }
  //paso el objeto por parámetro.
  login({
    email:"teoarco@gmail.com",
    password:"1346787978"
  });

  // Comenzamos a crearun función con un objeto mas grande.
  type Sizes= 'S'|'M'|'L'|'XL';
  // Creo un tipo de dato para el objeto.
  type product={
    tittle:string,
    createAt:Date,
    stock:number,
    size?:Sizes
  };
  // El array es un objeto que cumple con el tipado product.
  const products:product[]=[];

  const addProducts=(data:product)=>{
    products.push(data)
  }
  addProducts({
    tittle:"P1",
    createAt:new Date(),
    stock:12,
    size:"XL"
  })
  console.log(products)

})();
