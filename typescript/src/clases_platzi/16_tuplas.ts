const prices:(number|string)[]=[1,2,3,4,5,'as'];
prices.push("Otro")
console.log(prices)

let user:[string,number];
user=['MatheoAriaz',15];// Esta sería la forma correcta de llamar la tupla

user=[]// Como no existen los dos elementos sale un error
user=['MatheoAriaz'];// Faltaría un Elemento
user=[15,'MatheoAriaz',];//Al estar al contrario sale un error
