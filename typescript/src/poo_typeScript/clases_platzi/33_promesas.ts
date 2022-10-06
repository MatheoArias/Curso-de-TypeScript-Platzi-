// Se utiliza AXIOS para llamar Api's porque fetch aún no hacer parte de node
//intslo AXIOS para trabajar API's (Funciona con le fetch en Js)
import axios from "axios";

//Para poder ejecutar un función await debe de estar dentro de un contexto asyncrono
(async () => {

  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, time)
    });
    return promise
  }
  // La funció tiene una etiqueta Async, lo que indica que siempre va a retornar una promesa
  async function getProductsAsync(){
    const products= await axios.get('https://api.escuelajs.co/api/v1/products')
    // la información en Axios la pasa por el parametro Data
    return products.data;
  }
  console.log('----'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);
  //Como es una promesa ejecuto un await
  const productv2= await getProductsAsync();
  console.log(productv2);
})();
