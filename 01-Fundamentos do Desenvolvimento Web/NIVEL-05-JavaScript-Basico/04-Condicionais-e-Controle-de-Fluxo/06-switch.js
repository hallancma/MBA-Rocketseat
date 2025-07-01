// Exemplos de uso do switch em JavaScript

// 1. Switch básico com dias da semana
let diaSemana = 3;
switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}

// 2. Switch com strings
let mes = "Janeiro";
switch (mes) {
  case "Janeiro":
  case "Fevereiro":
  case "Março":
    console.log("Primeiro trimestre");
    break;
  case "Abril":
  case "Maio":
  case "Junho":
    console.log("Segundo trimestre");
    break;
  case "Julho":
  case "Agosto":
  case "Setembro":
    console.log("Terceiro trimestre");
    break;
  case "Outubro":
  case "Novembro":
  case "Dezembro":
    console.log("Quarto trimestre");
    break;
  default:
    console.log("Mês inválido");
}

// 3. Switch com operações matemáticas
let operacao = "soma";
let a = 10;
let b = 5;
let resultado;

switch (operacao) {
  case "soma":
    resultado = a + b;
    console.log(`Soma: ${resultado}`);
    break;
  case "subtracao":
    resultado = a - b;
    console.log(`Subtração: ${resultado}`);
    break;
  case "multiplicacao":
    resultado = a * b;
    console.log(`Multiplicação: ${resultado}`);
    break;
  case "divisao":
    resultado = a / b;
    console.log(`Divisão: ${resultado}`);
    break;
  default:
    console.log("Operação inválida");
}

// 4. Switch com faixas de idade
let idade = 25;
switch (true) {
  case idade < 18:
    console.log("Menor de idade");
    break;
  case idade < 30:
    console.log("Jovem adulto");
    break;
  case idade < 60:
    console.log("Adulto");
    break;
  default:
    console.log("Idoso");
}

// 5. Switch com verificação de tipo
let valor = "123";
switch (typeof valor) {
  case "string":
    console.log("É uma string");
    break;
  case "number":
    console.log("É um número");
    break;
  case "boolean":
    console.log("É um booleano");
    break;
  case "object":
    console.log("É um objeto");
    break;
  default:
    console.log("Tipo desconhecido");
}
