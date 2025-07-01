// O que é o let no JavaScript?
//
// O 'let' é uma palavra-chave introduzida no ES6 (ECMAScript 2015) para declarar variáveis.
// Diferente do 'var', o 'let' tem escopo de bloco e não permite redeclaração.

// Exemplo básico de uso do let:
let nome = "Maria";
console.log(nome); // Imprime: Maria

// O let tem escopo de bloco:
{
  let idade = 25;
  console.log(idade); // Imprime: 25
}
// console.log(idade); // Erro! idade não está definido fora do bloco

// Não permite redeclaração:
let email = "maria@email.com";
// let email = "outro@email.com"; // Erro! email já foi declarado

// Mas permite reatribuição:
let contador = 0;
contador = 1;
console.log(contador); // Imprime: 1

// Exemplo de uso em loop:
for (let i = 0; i < 3; i++) {
  console.log(i); // Imprime: 0, 1, 2
}
// console.log(i); // Erro! i não está definido fora do loop

// Boas práticas:
// 1. Use let quando precisar reatribuir valores
// 2. Prefira let ao invés de var
// 3. Declare variáveis no início do escopo
// 4. Evite redeclarar variáveis
