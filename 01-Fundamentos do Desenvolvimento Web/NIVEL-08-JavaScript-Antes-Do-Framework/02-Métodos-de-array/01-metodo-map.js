// O método map() chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array.


const products = ["teclado", "mouse", "monitor"];

//Percorrendo os itens do Array
products.map((product) => {
  console.log(product);
})

//Sintaxe reduzida
products.map((product) => console.log(product));

//Utilizando o novo objeto retornado
const formatted = products.map((product) => {
  // return product.toLocaleUpperCase();
  return {
    id: Math.random(),
    description: product,
    price: 70
  }
});

console.log(formatted);