(()=>{
/// en el caso de tipar un fecha si se puede usar Date (comenzando con mayúsculas)
type Sizes= 'S'|'M'|'L'|'XL';

function createProductToJson(
  tittle:string,
  createAt:Date,
  stock:number,
  size:Sizes

){
  return{
    tittle,
    createAt,
    stock,
    size
  }
}
const producto1=createProductToJson("P1",new Date(),12,'XL');
console.log(producto1);
console.log(producto1.tittle);
console.log(producto1.createAt);

const createProductToJsonV2=(
  tittle:string,
  createAt:Date,
  stock:number,
  size?:Sizes

)=>{
  return{
    tittle,
    createAt,
    stock,
    size
  }
}

})();
