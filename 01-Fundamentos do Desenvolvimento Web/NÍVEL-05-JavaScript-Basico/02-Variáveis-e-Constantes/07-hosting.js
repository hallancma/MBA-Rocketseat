// O que é Hoisting em JavaScript?
//
// Hoisting é um comportamento do JavaScript onde as declarações de variáveis e funções
// são movidas para o topo do seu escopo antes da execução do código.

// Exemplo de hoisting com var:
console.log(nome); // Imprime: undefined
var nome = "João";
console.log(nome); // Imprime: João

// O código acima é interpretado como:
// var nome;
// console.log(nome); // undefined
// nome = "João";
// console.log(nome); // João

// Hoisting com funções:
sayHello(); // Imprime: Olá!

function sayHello() {
  console.log("Olá!");
}

// Com let e const:
// console.log(idade); // Erro! Cannot access 'idade' before initialization
let idade = 25;

// console.log(email); // Erro! Cannot access 'email' before initialization
const email = "joao@email.com";

// Boas práticas:
// 1. Sempre declare variáveis no início do escopo
// 2. Use let e const ao invés de var
// 3. Evite depender do hoisting
// 4. Mantenha o código mais previsível e legível
