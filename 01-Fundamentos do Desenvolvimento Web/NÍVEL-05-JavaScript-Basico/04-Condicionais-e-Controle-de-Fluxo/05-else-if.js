// Exemplos de uso do else if em JavaScript

// 1. Verificação de faixa etária
let idade = 25;
if (idade < 18) {
  console.log("Menor de idade");
} else if (idade < 30) {
  console.log("Jovem adulto");
} else if (idade < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// 2. Verificação de nota escolar
let nota = 8.5;
if (nota < 5) {
  console.log("Reprovado");
} else if (nota < 7) {
  console.log("Recuperação");
} else if (nota < 9) {
  console.log("Bom");
} else {
  console.log("Excelente");
}

// 3. Verificação de período do dia
let hora = 15;
if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else if (hora < 24) {
  console.log("Boa noite");
} else {
  console.log("Hora inválida");
}

// 4. Verificação de salário
let salario = 5000;
if (salario < 1000) {
  console.log("Baixo");
} else if (salario < 3000) {
  console.log("Médio");
} else if (salario < 8000) {
  console.log("Alto");
} else {
  console.log("Muito alto");
}

// 5. Verificação de temperatura
let temperatura = 28;
if (temperatura < 0) {
  console.log("Muito frio");
} else if (temperatura < 15) {
  console.log("Frio");
} else if (temperatura < 25) {
  console.log("Ameno");
} else if (temperatura < 35) {
  console.log("Quente");
} else {
  console.log("Muito quente");
}
