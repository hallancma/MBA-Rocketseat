// Exemplos de arrow functions em JavaScript

// 1. Arrow function básica
const saudar = () => {
  console.log("Olá, mundo!");
};
saudar(); // "Olá, mundo!"

// 2. Arrow function com parâmetros
const somar = (a, b) => {
  return a + b;
};
console.log(somar(5, 3)); // 8

// 3. Arrow function com retorno implícito
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 2)); // 8

// 4. Arrow function como callback
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados); // [2, 4, 6, 8, 10]

// 5. Arrow function com objeto
const criarUsuario = (nome, idade) => ({ nome, idade });
console.log(criarUsuario("João", 25)); // { nome: "João", idade: 25 }

// 6. Arrow function com parâmetros padrão
const calcularArea = (base = 1, altura = 1) => base * altura;
console.log(calcularArea(5)); // 5
console.log(calcularArea(5, 3)); // 15

// 7. Arrow function com rest parameters
const somarNumeros = (...numeros) => numeros.reduce((total, num) => total + num, 0);
console.log(somarNumeros(1, 2, 3, 4)); // 10

// 8. Arrow function com desestruturação
const exibirDados = ({ nome, idade }) => console.log(`Nome: ${nome}, Idade: ${idade}`);
exibirDados({ nome: "Maria", idade: 30 }); // Nome: Maria, Idade: 30

// 9. Arrow function com setTimeout
setTimeout(() => {
  console.log("Esta mensagem aparecerá após 2 segundos");
}, 2000);

// 10. Arrow function com this
const pessoa = {
  nome: "Ana",
  saudar: function () {
    setTimeout(() => {
      console.log(`Olá, eu sou ${this.nome}`);
    }, 1000);
  }
};
pessoa.saudar(); // "Olá, eu sou Ana"
