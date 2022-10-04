// Este se utiliza para funciones que nunca van a a terminar, por ejemplo un ciclo infinito.

// Estos son ejemplos de funciones que son infinitas. Si pongo el cursor encima de la funcion VsCode nos dice que tipo de variable nos está entregando.
// El codigo estático alerta sobre esto y pone la funcion como "never" qye sería el neverType
const withoutEnd=()=>{
  while(true){
    console.log('Nunca pares de aprender')
  }
}
const fail=(message:string)=>{
  throw new Error(message);
}

const example=(input:unknown)=>{
  if(typeof input==='string'){
    return 'Es un string';
  }else if(Array.isArray(input)){
    return 'Es un Array'
  };
}

console.log(example('Esto es un string'))
console.log(example([1,2,4,5,6]))
console.log(example(123456))// Como no cumple ninguna condición Ts se detiene.
console.log(example('Esto es un hola después del Fail'))

