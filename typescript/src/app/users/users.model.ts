import { BaseModel } from "../base.model";

export enum ROLES{
  ADMIN='Administrador',
  SELLER="Vendedor",
  COSTUMER="Cliente",
}

export interface User extends BaseModel{
  id:string|number;
  username:string;
  role:ROLES;
}

