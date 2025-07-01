// Tipos de dados em JavaScript

// 1. String (Texto)
let nome = "João";
let sobrenome = 'Silva';
let frase = `Olá ${nome}!`; // Template string

// 2. Number (Número)
let idade = 25;
let altura = 1.75;
let temperatura = -5;

// 3. Boolean (Booleano)
let ativo = true;
let inativo = false;

// 4. Undefined
let variavel;
console.log(variavel); // undefined

// 5. Null
let nulo = null;

// 6. Object (Objeto)
let pessoa = {
  nome: "Maria",
  idade: 30,
  casado: false
};

// 7. Array (Vetor)
let frutas = ["maçã", "banana", "laranja"];

// 8. Function (Função)
function somar(a, b) {
  return a + b;
}

// 9. Symbol (Símbolo)
let simbolo = Symbol("descrição");

// 10. BigInt (Números grandes)
let numeroGrande = 9007199254740991n;

// Exemplos de uso
console.log(typeof nome); // "string"
console.log(typeof idade); // "number"
console.log(typeof ativo); // "boolean"
console.log(typeof variavel); // "undefined"
console.log(typeof nulo); // "object"
console.log(typeof pessoa); // "object"
console.log(typeof frutas); // "object"
console.log(typeof somar); // "function"
console.log(typeof simbolo); // "symbol"
console.log(typeof numeroGrande); // "bigint"
