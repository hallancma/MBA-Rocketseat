// Exemplos de retorno de valores em funções JavaScript

// 1. Retorno básico
function somar(a, b) {
  return a + b;
}
console.log(somar(5, 3)); // 8

// 2. Retorno de múltiplos valores usando objeto
function calcularEstatisticas(numeros) {
  const soma = numeros.reduce((total, num) => total + num, 0);
  const media = soma / numeros.length;
  const max = Math.max(...numeros);
  const min = Math.min(...numeros);

  return {
    soma,
    media,
    max,
    min
  };
}
console.log(calcularEstatisticas([1, 2, 3, 4, 5]));

// 3. Retorno condicional
function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  }
  return "Menor de idade";
}
console.log(verificarIdade(20)); // "Maior de idade"
console.log(verificarIdade(15)); // "Menor de idade"

// 4. Retorno de função (função de ordem superior)
function multiplicador(fator) {
  return function (numero) {
    return numero * fator;
  };
}
const dobro = multiplicador(2);
console.log(dobro(5)); // 10

// 5. Retorno com tratamento de erro
function dividir(a, b) {
  if (b === 0) {
    return "Erro: Divisão por zero não é permitida";
  }
  return a / b;
}
console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // "Erro: Divisão por zero não é permitida"

// 6. Retorno de array
function gerarSequencia(inicio, fim) {
  const sequencia = [];
  for (let i = inicio; i <= fim; i++) {
    sequencia.push(i);
  }
  return sequencia;
}
console.log(gerarSequencia(1, 5)); // [1, 2, 3, 4, 5]

// 7. Retorno com desestruturação
function obterCoordenadas() {
  return {
    x: 10,
    y: 20,
    z: 30
  };
}
const { x, y } = obterCoordenadas();
console.log(x, y); // 10 20

// 8. Retorno de Promise
function buscarDados() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ dados: "Informações importantes" });
    }, 1000);
  });
}
buscarDados().then(resultado => console.log(resultado));

// 9. Retorno com operador ternário
const verificarParidade = numero => numero % 2 === 0 ? "Par" : "Ímpar";
console.log(verificarParidade(4)); // "Par"
console.log(verificarParidade(7)); // "Ímpar"

// 10. Retorno de função com closure
function criarContador() {
  let contador = 0;
  return {
    incrementar: () => ++contador,
    decrementar: () => --contador,
    valor: () => contador
  };
}
const contador = criarContador();
console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.valor()); // 2
