// Operadores de atribuição (=, +=, -=, *=, /=, %=, **=)

// Atribuição simples (=)
let a = 5;
console.log(a); // 5

// Atribuição com adição (+=)
a += 3; // equivalente a: a = a + 3
console.log(a); // 8

// Atribuição com subtração (-=)
a -= 2; // equivalente a: a = a - 2
console.log(a); // 6

// Atribuição com multiplicação (*=)
a *= 2; // equivalente a: a = a * 2
console.log(a); // 12

// Atribuição com divisão (/=)
a /= 3; // equivalente a: a = a / 3
console.log(a); // 4

// Atribuição com módulo (%=)
a %= 3; // equivalente a: a = a % 3
console.log(a); // 1

// Atribuição com exponenciação (**=)
a **= 3; // equivalente a: a = a ** 3
console.log(a); // 1

// Exemplos com strings
let texto = "Olá";
texto += " Mundo"; // concatenação
console.log(texto); // "Olá Mundo"

// Exemplos com arrays
let numeros = [1, 2, 3];
numeros[0] += 1; // incrementa o primeiro elemento
console.log(numeros); // [2, 2, 3]

// Exemplos com objetos
let pessoa = { idade: 25 };
pessoa.idade += 1; // incrementa a idade
console.log(pessoa); // { idade: 26 }
