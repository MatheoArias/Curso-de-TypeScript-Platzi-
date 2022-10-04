// En el main pongo los objetos.
import {addProducts,calcStock,products} from './product.service'

addProducts({
  tittle:"P1",
  createAt:new Date(),
  stock:12,
  size:"XL"
})
console.log(products)
console.log(calcStock())
