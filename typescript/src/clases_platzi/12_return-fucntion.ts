(()=>{

  //Función con retorno
  const calcTotal=(prices:number[])=>{
    let total=0;
    prices.forEach((item)=>{
      total += item;
    })
    return total.toString();
  }

  //Función sin retorno (Las funciones que no retornan nada van a ser de tipo "void")
  // por esta rezón se pone el void de forma explícita
  const printTotal=(prices:number[]):void=>{
    const rta =calcTotal(prices);
    console.log(`El total es: ${rta}`);
  }

  const rta =calcTotal([1,2,1,1,1]);
  console.log(rta);
  printTotal([1,2,1,1,1]);

})();
