import { BaseModel } from "../base.model";
import {Product} from "../products/product.model"
import { User } from "../users/users.model";

export interface Order extends BaseModel{
  createdAT:Date;
  products:Product[];
  user:User
}
