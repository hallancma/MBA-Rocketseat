// Operadores Aritméticos
let soma = 10 + 5; // 15
let subtracao = 10 - 5; // 5
let multiplicacao = 10 * 5; // 50
let divisao = 10 / 5; // 2
let modulo = 10 % 3; // 1 (resto da divisão)
let exponenciacao = 2 ** 3; // 8 (2 elevado a 


//2)Operadores de incremento e decremento
let contador = 0;
contador++; // Incrementa em 1
contador--; // Decrementa em 1  

// 3)

// Operadores de Atribuição
let x = 5;
x += 3; // x = x + 3
x -= 2; // x = x - 2
x *= 4; // x = x * 4
x /= 2; // x = x / 2

// Operadores de Comparação
let a = 5;
let b = 10;
console.log(a == b); // false (igualdade)
console.log(a === b); // false (igualdade estrita)
console.log(a != b); // true (diferente)
console.log(a !== b); // true (diferente estrito)
console.log(a > b); // false (maior que)
console.log(a < b); // true (menor que)
console.log(a >= b); // false (maior ou igual)
console.log(a <= b); // true (menor ou igual)

// Operadores Lógicos
let c = true;
let d = false;
console.log(c && d); // false (AND)
console.log(c || d); // true (OR)
console.log(!c); // false (NOT)

// Operador Ternário
let idade = 18;
let podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";

// Operador de Coalescência Nula
let nome = null;
let nomeUsuario = nome ?? "Usuário"; // "Usuário"

// Operador de Encadeamento Opcional
const usuario = {
  endereco: {
    rua: "Rua Principal"
  }
};
console.log(usuario?.endereco?.rua); // "Rua Principal"
console.log(usuario?.contato?.telefone); // undefined

// Expressões de Template String
let nome2 = "João";
let idade2 = 25;
let mensagem = `Olá, meu nome é ${nome2} e tenho ${idade2} anos.`;

// Expressões de Função
const calcular = (a, b) => a + b;
console.log(calcular(5, 3)); // 8

// Expressões de Array
let numeros = [1, 2, 3, 4, 5];
let dobro = numeros.map(num => num * 2);
let somaTotal = numeros.reduce((acc, curr) => acc + curr, 0);

// Expressões de Objeto
let pessoa = {
  nome: "Maria",
  idade: 30,
  saudacao() {
    return `Olá, eu sou ${this.nome}`;
  }
};



