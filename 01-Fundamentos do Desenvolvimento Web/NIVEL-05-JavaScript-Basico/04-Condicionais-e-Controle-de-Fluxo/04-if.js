// Exemplos de uso do if em JavaScript

// 1. If simples
let idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade");
}

// 2. If com else
let nota = 7;
if (nota >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// 3. If com else if
let hora = 14;
if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

// 4. If com múltiplas condições usando operadores lógicos
let temCarteira = true;
let temCarro = true;
if (temCarteira && temCarro) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

// 5. If com verificação de tipo
let valor = "123";
if (typeof valor === "string") {
  console.log("É uma string");
} else {
  console.log("Não é uma string");
}

// 6. If com verificação de array vazio
let lista = [];
if (lista.length === 0) {
  console.log("Lista vazia");
} else {
  console.log("Lista com itens");
}

// 7. If com verificação de objeto
let usuario = {
  nome: "João",
  idade: 25
};
if (usuario && usuario.nome) {
  console.log(`Olá ${usuario.nome}`);
} else {
  console.log("Usuário não encontrado");
}

// 8. If com verificação de número
let numero = 0;
if (numero > 0) {
  console.log("Número positivo");
} else if (numero < 0) {
  console.log("Número negativo");
} else {
  console.log("Número zero");
}
