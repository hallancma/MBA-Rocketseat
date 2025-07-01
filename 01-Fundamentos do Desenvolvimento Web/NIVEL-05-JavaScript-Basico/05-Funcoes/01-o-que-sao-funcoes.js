// O que são funções em JavaScript?

// 1. Função básica
function saudar() {
  console.log("Olá, mundo!");
}
saudar(); // Chama a função

// 2. Função com parâmetros
function somar(a, b) {
  return a + b;
}
console.log(somar(5, 3)); // 8

// 3. Função com parâmetros opcionais
function multiplicar(a, b = 1) {
  return a * b;
}
console.log(multiplicar(5)); // 5
console.log(multiplicar(5, 2)); // 10

// 4. Função anônima
const dividir = function (a, b) {
  return a / b;
};
console.log(dividir(10, 2)); // 5

// 5. Arrow function
const subtrair = (a, b) => a - b;
console.log(subtrair(10, 3)); // 7

// 6. Função com múltiplos retornos
function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
console.log(verificarIdade(20)); // "Maior de idade"

// 7. Função com escopo de variáveis
let contador = 0;
function incrementar() {
  contador++;
  return contador;
}
console.log(incrementar()); // 1
console.log(incrementar()); // 2

// 8. Função com objeto como parâmetro
function exibirUsuario({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}
exibirUsuario({ nome: "João", idade: 25 });

// 9. Função com array como parâmetro
function somarArray(numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(somarArray([1, 2, 3, 4])); // 10

// 10. Função com callback
function processarDados(dados, callback) {
  const resultado = dados.map(item => item * 2);
  callback(resultado);
}
processarDados([1, 2, 3], (resultado) => {
  console.log("Resultado:", resultado); // [2, 4, 6]
});
