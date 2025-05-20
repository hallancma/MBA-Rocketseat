// Operadores lógicos (&&, ||, !)

// Operador AND (&&) - retorna true se ambas as expressões forem verdadeiras
let idade = 25;
let temCarteira = true;

console.log(idade >= 18 && temCarteira); // true - ambas as condições são verdadeiras
console.log(idade >= 18 && !temCarteira); // false - segunda condição é falsa

// Operador OR (||) - retorna true se pelo menos uma expressão for verdadeira
let temDinheiro = false;
let temCartao = true;

console.log(temDinheiro || temCartao); // true - pelo menos uma condição é verdadeira
console.log(!temDinheiro || !temCartao); // true - pelo menos uma condição é verdadeira

// Operador NOT (!) - inverte o valor booleano
let ativo = true;
console.log(!ativo); // false
console.log(!!ativo); // true - dupla negação

// Exemplos combinados
let a = 5;
let b = 10;
let c = 15;

console.log(a < b && b < c); // true - todas as condições são verdadeiras
console.log(a > b || b < c); // true - segunda condição é verdadeira
console.log(!(a > b)); // true - inverte o resultado de a > b

// Exemplos com strings
let nome = "João";
let sobrenome = "";

console.log(nome && sobrenome); // "" - retorna o último valor verdadeiro
console.log(nome || sobrenome); // "João" - retorna o primeiro valor verdadeiro
console.log(!nome); // false - inverte o valor booleano da string não vazia

// Exemplos com números
console.log(0 && 5); // 0 - retorna o primeiro valor falso
console.log(0 || 5); // 5 - retorna o primeiro valor verdadeiro
console.log(!0); // true - inverte o valor booleano do zero
