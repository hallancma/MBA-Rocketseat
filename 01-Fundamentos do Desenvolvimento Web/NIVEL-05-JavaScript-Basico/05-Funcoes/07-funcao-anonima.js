// Exemplos de funções anônimas em JavaScript

// 1. Função anônima básica
const saudar = function () {
  console.log("Olá, mundo!");
};
saudar(); // "Olá, mundo!"

// 2. Função anônima com parâmetros
const somar = function (a, b) {
  return a + b;
};
console.log(somar(5, 3)); // 8

// 3. Função anônima como callback
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map(function (numero) {
  return numero * 2;
});
console.log(numerosDobrados); // [2, 4, 6, 8, 10]

// 4. Função anônima em um objeto
const calculadora = {
  somar: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  }
};
console.log(calculadora.somar(10, 5)); // 15
console.log(calculadora.subtrair(10, 5)); // 5

// 5. Função anônima com setTimeout
setTimeout(function () {
  console.log("Esta mensagem aparecerá após 2 segundos");
}, 2000);

// 6. Função anônima com IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Esta função é executada imediatamente");
})();

// 7. Função anônima com closure
const contador = (function () {
  let count = 0;
  return {
    incrementar: function () {
      return ++count;
    },
    decrementar: function () {
      return --count;
    }
  };
})();
console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.decrementar()); // 1
