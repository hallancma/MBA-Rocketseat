// Exemplos de conversão de tipos (type conversion) e coerção de tipos (type coercion) em JavaScript

// Conversão explícita (type conversion)
// String para Number
let numeroString = "123";
let numeroConvertido = Number(numeroString);
console.log(numeroConvertido); // 123
console.log(typeof numeroConvertido); // "number"

// Number para String
let numero = 456;
let stringConvertida = String(numero);
console.log(stringConvertida); // "456"
console.log(typeof stringConvertida); // "string"

// Boolean para Number
let booleano = true;
let numeroDoBooleano = Number(booleano);
console.log(numeroDoBooleano); // 1
console.log(typeof numeroDoBooleano); // "number"

// String para Boolean
let texto = "true";
let booleanoConvertido = Boolean(texto);
console.log(booleanoConvertido); // true
console.log(typeof booleanoConvertido); // "boolean"

// Coerção implícita (type coercion)
// String + Number
let nome = "João";
let idade = 25;
let mensagem = nome + " tem " + idade + " anos";
console.log(mensagem); // "João tem 25 anos"

// Number + String
let preco = 10;
let textoPreco = "O preço é " + preco;
console.log(textoPreco); // "O preço é 10"

// Operações matemáticas com strings
let numero1 = "5";
let numero2 = "3";
let soma = numero1 + numero2;
console.log(soma); // "53" (concatenação)
console.log(Number(numero1) + Number(numero2)); // 8 (soma)

// Coerção em comparações
console.log("5" == 5); // true (coerção implícita)
console.log("5" === 5); // false (sem coerção)

// Coerção em operações lógicas
console.log(!"0"); // false
console.log(!!"0"); // true
console.log(!"false"); // false
console.log(!!"false"); // true

// Coerção com operadores matemáticos
console.log("10" - 5); // 5
console.log("10" * 2); // 20
console.log("10" / 2); // 5
console.log("10" % 3); // 1

// Exemplos de conversão com parseInt e parseFloat
let decimal = "3.14";
console.log(parseInt(decimal)); // 3
console.log(parseFloat(decimal)); // 3.14

// Conversão com operador unário +
let textoNumero = "42";
console.log(+textoNumero); // 42
console.log(typeof +textoNumero); // "number"




