///Son valores que se le asignan tipos por default
export const createProduct=(
  id:string|number,
  isNew:boolean=true,
  stock:number=10
)=>{
  return {
    id,
    stock,
    isNew:isNew?? true
  }
}

//Prueba número uno-- output: id:1, stock:12, isNew:true
const p1=createProduct(1,true,12);
console.log(p1)

//Prueba número dos-- output: { id: 1, stock: 10, isNew: true }
//Cuando no pasamos valores el envía los valores que ya declaramos anteriormente
const p2=createProduct(1);
console.log(p2);

//Prueba número tres-- output:{ id: 1, stock: 10, isNew: false }
const p3=createProduct(1, false);
console.log(p3)

