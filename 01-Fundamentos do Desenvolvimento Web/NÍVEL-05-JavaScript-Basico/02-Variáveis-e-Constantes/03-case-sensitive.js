// Case Sensitive em JavaScript
//
// JavaScript é uma linguagem case-sensitive, o que significa que diferencia letras maiúsculas de minúsculas.
// Isso afeta nomes de variáveis, funções, objetos e outros identificadores.

// Exemplo de case-sensitive em variáveis:
let nome = "João";
let Nome = "Maria";
let NOME = "Pedro";

console.log(nome); // Imprime: João
console.log(Nome); // Imprime: Maria
console.log(NOME); // Imprime: Pedro

// São três variáveis diferentes porque diferem em maiúsculas/minúsculas

// Exemplo com funções:
function calcular() {
    return "Função calcular";
}

function Calcular() {
    return "Função Calcular";
}

console.log(calcular()); // Imprime: Função calcular
console.log(Calcular()); // Imprime: Função Calcular

// Exemplo de erro comum:
let idade = 25;
// console.log(Idade); // Erro! 'Idade' não está definido

// Boas práticas:
// 1. Mantenha consistência no uso de maiúsculas/minúsculas
// 2. Use camelCase para variáveis e funções
// 3. Use PascalCase para classes
// 4. Evite criar variáveis que diferem apenas por maiúsculas/minúsculas
