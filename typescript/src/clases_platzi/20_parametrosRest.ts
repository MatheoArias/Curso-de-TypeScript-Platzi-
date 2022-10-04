import {User,ROLES} from './14_Enums'
const currentUser:User={
  username:'MatheoAriaz',
  role:ROLES.COSTUMER
}

export const checkAdminRole=()=>{
  if (currentUser.role ===ROLES.ADMIN){
    return true;
  }else{
    return false;
  }
}
const rta=checkAdminRole();
console.log(rta); //output: false

export const checkRole=(roleOne:string,roleTwo:string)=>{
  if(currentUser.role===roleOne){
    return true;
  }if(currentUser.role===roleTwo){
    return true;
  }
  return false;
}

const rta2=checkRole(ROLES.ADMIN,ROLES.SELLER);
console.log(rta2); //output: false

export const checkRoleVersionTwo=(role:string[])=>{
  if(role.includes(currentUser.role)){
    return true;
  }else{
    return false;
  }
}
const rta3=checkRoleVersionTwo([ROLES.ADMIN,ROLES.SELLER]);
console.log(rta3);// output: false

// con el argumento "..." todo lo que entra a la función se recibe como array
export const checkRoleVersionThree=(...role:string[])=>{
  if(role.includes(currentUser.role)){
    return true;
  }else{
    return false;
  }
}
// Asi cuando vayaa ejecutar la función no tengo que enviar parámetro tras parámetro
const rta4=checkRoleVersionThree(ROLES.ADMIN,ROLES.COSTUMER);
console.log(rta4);// output: True
