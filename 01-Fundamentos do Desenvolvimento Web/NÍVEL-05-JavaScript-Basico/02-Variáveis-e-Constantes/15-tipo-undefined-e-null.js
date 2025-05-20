// Exemplos de variáveis do tipo Undefined e Null em JavaScript

// Undefined - variável declarada mas não inicializada
let variavelUndefined;
console.log(variavelUndefined); // undefined

// Undefined - propriedade não existente em um objeto
const pessoa = {
  nome: "João",
  idade: 25
};
console.log(pessoa.endereco); // undefined

// Undefined - retorno de função sem valor
function funcaoSemRetorno() {
  // não retorna nada explicitamente
}
console.log(funcaoSemRetorno()); // undefined

// Null - valor nulo explicitamente atribuído
let variavelNull = null;
console.log(variavelNull); // null

// Null - usado para indicar ausência intencional de valor
let usuario = {
  nome: "Maria",
  email: null // email não fornecido
};
console.log(usuario.email); // null

// Comparações com undefined e null
console.log(undefined == null); // true
console.log(undefined === null); // false

// Verificando o tipo
console.log(typeof variavelUndefined); // "undefined"
console.log(typeof variavelNull); // "object"

// Diferença entre undefined e null
let valor;
console.log(valor); // undefined
valor = null;
console.log(valor); // null
