// O que é o const no JavaScript?
//
// O 'const' é uma palavra-chave introduzida no ES6 (ECMAScript 2015) para declarar constantes.
// Diferente do 'let' e 'var', o 'const' não permite reatribuição após sua declaração.

// Exemplo básico de uso do const:
const PI = 3.14159;
console.log(PI); // Imprime: 3.14159

// Não permite reatribuição:
const nome = "João";
// nome = "Maria"; // Erro! Não é possível reatribuir uma constante

// O const também tem escopo de bloco:
{
  const idade = 25;
  console.log(idade); // Imprime: 25
}
// console.log(idade); // Erro! idade não está definido fora do bloco

// Com objetos e arrays:
const pessoa = {
  nome: "Ana",
  idade: 30
};
// pessoa = {}; // Erro! Não é possível reatribuir a constante
pessoa.idade = 31; // OK! É possível modificar propriedades do objeto

const numeros = [1, 2, 3];
// numeros = [4, 5, 6]; // Erro! Não é possível reatribuir a constante
numeros.push(4); // OK! É possível modificar o array

// Boas práticas:
// 1. Use const por padrão, a menos que precise reatribuir valores
// 2. Use let apenas quando precisar reatribuir valores
// 3. Evite usar var
// 4. Use nomes em maiúsculas para constantes que representam valores fixos
