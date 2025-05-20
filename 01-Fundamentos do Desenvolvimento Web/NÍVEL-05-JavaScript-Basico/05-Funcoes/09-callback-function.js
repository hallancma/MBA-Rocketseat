// Exemplos de funções de callback em JavaScript

// 1. Callback básico
function processarDados(dados, callback) {
  const resultado = dados.toUpperCase();
  callback(resultado);
}

processarDados("olá mundo", function (resultado) {
  console.log(resultado); // "OLÁ MUNDO"
});

// 2. Callback com setTimeout
function aguardarSegundos(segundos, callback) {
  setTimeout(() => {
    callback(`Passaram-se ${segundos} segundos`);
  }, segundos * 1000);
}

aguardarSegundos(2, function (mensagem) {
  console.log(mensagem); // "Passaram-se 2 segundos"
});

// 3. Callback em array methods
const numeros = [1, 2, 3, 4, 5];

// Usando map
const numerosDobrados = numeros.map(function (numero) {
  return numero * 2;
});
console.log(numerosDobrados); // [2, 4, 6, 8, 10]

// Usando filter
const numerosPares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); // [2, 4]

// 4. Callback com tratamento de erro
function buscarUsuario(id, callback) {
  // Simulando uma busca
  if (id > 0) {
    callback(null, { id, nome: "João" });
  } else {
    callback("ID inválido", null);
  }
}

buscarUsuario(1, function (erro, usuario) {
  if (erro) {
    console.error(erro);
  } else {
    console.log(usuario); // { id: 1, nome: "João" }
  }
});

// 5. Callback com múltiplos parâmetros
function calcular(a, b, callback) {
  const soma = a + b;
  const subtracao = a - b;
  const multiplicacao = a * b;

  callback(soma, subtracao, multiplicacao);
}

calcular(10, 5, function (soma, subtracao, multiplicacao) {
  console.log(`Soma: ${soma}`); // Soma: 15
  console.log(`Subtração: ${subtracao}`); // Subtração: 5
  console.log(`Multiplicação: ${multiplicacao}`); // Multiplicação: 50
});

// 6. Callback com arrow function
const processarTexto = (texto, callback) => {
  const resultado = texto.split("").reverse().join("");
  callback(resultado);
};

processarTexto("JavaScript", (resultado) => {
  console.log(resultado); // "tpircSavaJ"
});

// 7. Callback em eventos
document.addEventListener("click", function (evento) {
  console.log("Clique detectado em:", evento.target);
});
