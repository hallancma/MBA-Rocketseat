// Compreendendo Escopos em JavaScript
//
// Escopo é o contexto onde as variáveis e funções são acessíveis.
// Em JavaScript, existem três tipos principais de escopo: global, função e bloco.

// 1. Escopo Global
let variavelGlobal = "Estou acessível em todo o código";
console.log(variavelGlobal); // Acessível aqui

// 2. Escopo de Função
function exemploEscopoFuncao() {
  let variavelFuncao = "Só posso ser acessada dentro desta função";
  console.log(variavelFuncao); // Acessível aqui
  console.log(variavelGlobal); // Também acessível aqui
}
// console.log(variavelFuncao); // Erro! Não está acessível fora da função

// 3. Escopo de Bloco
{
  let variavelBloco = "Só posso ser acessada dentro deste bloco";
  console.log(variavelBloco); // Acessível aqui
  console.log(variavelGlobal); // Também acessível aqui
}
// console.log(variavelBloco); // Erro! Não está acessível fora do bloco

// Exemplo de escopo aninhado
function escopoExterno() {
  let variavelExterna = "Estou no escopo externo";

  function escopoInterno() {
    let variavelInterna = "Estou no escopo interno";
    console.log(variavelExterna); // Pode acessar variáveis do escopo externo
    console.log(variavelInterna); // Pode acessar suas próprias variáveis
  }

  // console.log(variavelInterna); // Erro! Não pode acessar variáveis do escopo interno
}

// Boas práticas:
// 1. Evite variáveis globais quando possível
// 2. Use const e let para ter escopo de bloco
// 3. Mantenha o escopo das variáveis o mais restrito possível
// 4. Evite poluir o escopo global
