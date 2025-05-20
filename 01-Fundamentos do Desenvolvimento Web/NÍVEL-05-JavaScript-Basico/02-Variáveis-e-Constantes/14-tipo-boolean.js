// Exemplos de variáveis do tipo Boolean em JavaScript

// Boolean básico
let ativo = true;
let inativo = false;

// Boolean com comparações
let maiorDeIdade = 18 >= 18; // true
let menorDeIdade = 15 < 18; // true

// Boolean com operadores lógicos
let temPermissao = true && true; // true
let temAcesso = true || false; // true
let naoTemAcesso = !true; // false

// Boolean com comparações de strings
let mesmoNome = "João" === "João"; // true
let nomesDiferentes = "Maria" !== "João"; // true

// Boolean com comparações de números
let numerosIguais = 10 === 10; // true
let numerosDiferentes = 5 !== 10; // true

// Boolean com expressões
let expressao = (5 > 3) && (10 < 20); // true
let expressaoComplexa = (true && false) || (true && true); // true

// Exibindo os valores
console.log(ativo);
console.log(inativo);
console.log(maiorDeIdade);
console.log(temPermissao);
console.log(mesmoNome);
console.log(numerosIguais);
console.log(expressao);
console.log(expressaoComplexa);

// Verificando o tipo
console.log(typeof ativo); // "boolean"
console.log(typeof maiorDeIdade); // "boolean"
