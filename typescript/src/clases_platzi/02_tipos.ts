/// a esto lo vamos a llamar tipado (Type anotation)
// const (la variable):(tipo de variable)=(valor de la variable).
let numero:number=12;

// Hace inferencia del tipo de dato.
let numeros=123589; //En este caso quedaría como número
let palabras='Hola Mundo';//En este caso quedaría como string

// El motor de inferencia es el que hace que en typeScript nos sugiera el siguiente paso para cada uno de los procesos que estamos realizando en typeScript
// También alerta sobre variables ya declaradas. Para que esto no suceda debería de crear una función anónima
//(()=>{ /*aquiva el codigo*/ })();

// El código me sugiere que métodos puedo utilizar para cada una de las variables.
numeros.toPrecision()
palabras.toLocaleLowerCase()
//Con let y const las cosas cambian, con let puedo cambiar el valor pero con const no puedo reasignar el valor.



