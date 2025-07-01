//setInterval() executa uma função após um intervalo de tempo especificado

let value = 10;
console.log(value);
const interval = setInterval(() => {
  value--;
  console.log(value);
  if (value === 0) {
    console.log("Feliz Ano Novo!");
    //Interrompe o intervalo de execuções
    clearInterval(interval);
  }
}, 1000);