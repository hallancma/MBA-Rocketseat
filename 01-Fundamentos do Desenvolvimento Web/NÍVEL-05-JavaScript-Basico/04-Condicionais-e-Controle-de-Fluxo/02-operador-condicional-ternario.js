// Operador condicional ternário (?:) - forma abreviada de if/else

// Sintaxe básica: condição ? valorSeVerdadeiro : valorSeFalso

// Exemplo 1: Verificação de idade
let idade = 20;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // "Maior de idade"

// Exemplo 2: Verificação de nota
let nota = 7;
let resultado = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(resultado); // "Aprovado"

// Exemplo 3: Verificação de saldo
let saldo = 100;
let mensagem = saldo > 0 ? "Saldo positivo" : "Saldo negativo";
console.log(mensagem); // "Saldo positivo"

// Exemplo 4: Verificação de string vazia
let nome = "";
let saudacao = nome ? `Olá ${nome}` : "Olá visitante";
console.log(saudacao); // "Olá visitante"

// Exemplo 5: Ternário aninhado
let hora = 14;
let periodo = hora < 12 ? "Manhã" : hora < 18 ? "Tarde" : "Noite";
console.log(periodo); // "Tarde"

// Exemplo 6: Atribuição condicional
let preco = 100;
let desconto = preco > 50 ? 10 : 0;
console.log(`Desconto: ${desconto}%`); // "Desconto: 10%"

// Exemplo 7: Verificação de tipo
let valor = "123";
let numero = typeof valor === "number" ? valor : Number(valor);
console.log(numero); // 123

// Exemplo 8: Verificação de múltiplas condições
let temCarteira = true;
let temCarro = false;
let podeDirigir = temCarteira && temCarro ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir); // "Não pode dirigir"
