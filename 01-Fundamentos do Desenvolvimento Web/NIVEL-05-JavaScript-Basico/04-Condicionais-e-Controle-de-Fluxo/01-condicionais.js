// Exemplos de condicionais em JavaScript

// 1. if simples
let idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade");
}

// 2. if-else
let nota = 7;
if (nota >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// 3. if-else if-else
let hora = 14;
if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

// 4. Operador ternário
let idade2 = 20;
let podeDirigir = idade2 >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir);

// 5. switch case
let diaSemana = 3;
switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  default:
    console.log("Dia inválido");
}

// 6. Condicionais aninhadas
let temCarteira = true;
let idade3 = 18;
if (idade3 >= 18) {
  if (temCarteira) {
    console.log("Pode dirigir");
  } else {
    console.log("Precisa tirar carteira");
  }
} else {
  console.log("Não pode dirigir");
}

// 7. Operadores lógicos em condicionais
let temDinheiro = true;
let temCartao = false;
if (temDinheiro || temCartao) {
  console.log("Pode comprar");
} else {
  console.log("Não pode comprar");
}

// 8. Verificação de múltiplas condições
let idade4 = 25;
let temExperiencia = true;
if (idade4 >= 18 && temExperiencia) {
  console.log("Pode se candidatar à vaga");
} else {
  console.log("Não atende aos requisitos");
}
