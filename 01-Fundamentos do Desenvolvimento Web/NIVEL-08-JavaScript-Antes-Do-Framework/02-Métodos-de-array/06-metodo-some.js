/**
 * O Método some() testa se ao menos um dos elementos no array passa n a condição e retorna um valor true e false
 */

//Exemplo de array de idades

const ages = [15, 30, 39, 29];
const result = ages.some((age) => age <= 18);
console.log(result);