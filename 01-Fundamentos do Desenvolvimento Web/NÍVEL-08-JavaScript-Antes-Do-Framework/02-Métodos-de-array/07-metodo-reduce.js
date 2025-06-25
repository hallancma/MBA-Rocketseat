/*
O método reduce é utilizado para reduzir um array a um único valor.

Parâmetros:
- Array original (values)
- Acumulador (accumulator)
- Valor da iteração (currentValue)
- Valor Inicial (0)
- Index (index da iteração atual - opcional)
*/
const values = [1, 2, 3, 4, 5];
const sum = values.reduce((accumulador, currentValue, index) => {
  console.log("Acumulador", accumulador);
  console.log("Current Value", currentValue);
  console.log("Index", index);

  console.log("Soma", accumulador + currentValue);
  console.log("#############################");

  return accumulador + currentValue;
}, 0);

console.log("Total: ", sum);