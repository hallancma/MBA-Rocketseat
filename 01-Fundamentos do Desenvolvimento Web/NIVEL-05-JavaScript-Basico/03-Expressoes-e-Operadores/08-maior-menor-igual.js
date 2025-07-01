// Operadores de comparação: maior que (>), menor que (<), maior ou igual (>=), menor ou igual (<=)

// Exemplos com números
let a = 5;
let b = 10;

console.log(a > b);  // false - 5 não é maior que 10
console.log(a < b);  // true - 5 é menor que 10
console.log(a >= b); // false - 5 não é maior ou igual a 10
console.log(a <= b); // true - 5 é menor ou igual a 10

// Exemplos com strings (compara ordem alfabética)
let nome1 = "Ana";
let nome2 = "João";

console.log(nome1 > nome2);  // false - "Ana" vem antes de "João" alfabeticamente
console.log(nome1 < nome2);  // true - "Ana" vem antes de "João" alfabeticamente
console.log(nome1 >= nome2); // false
console.log(nome1 <= nome2); // true

// Exemplos com números iguais
let x = 5;
let y = 5;

console.log(x > y);  // false - 5 não é maior que 5
console.log(x < y);  // false - 5 não é menor que 5
console.log(x >= y); // true - 5 é igual a 5
console.log(x <= y); // true - 5 é igual a 5

// Exemplos com conversão de tipos
console.log("5" > 3);  // true - converte "5" para número
console.log("5" < "10"); // false - compara como strings
console.log(5 >= "5");   // true - converte "5" para número
console.log(5 <= "5");   // true - converte "5" para número
