import { productHttpService } from "./products/product-http.service";

const ProductService=new productHttpService();

(async () => {
  const products=await ProductService.getAll();
  console.log(products.length)
})();
