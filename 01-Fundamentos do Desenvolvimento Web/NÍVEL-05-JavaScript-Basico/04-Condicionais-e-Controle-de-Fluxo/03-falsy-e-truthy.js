// Valores Falsy em JavaScript
// São valores que são considerados falsos quando convertidos para booleano

// 1. false
console.log(Boolean(false)); // false

// 2. 0 (zero)
console.log(Boolean(0)); // false

// 3. "" (string vazia)
console.log(Boolean("")); // false

// 4. null
console.log(Boolean(null)); // false

// 5. undefined
console.log(Boolean(undefined)); // false

// 6. NaN (Not a Number)
console.log(Boolean(NaN)); // false

// Valores Truthy em JavaScript
// São valores que são considerados verdadeiros quando convertidos para booleano

// 1. true
console.log(Boolean(true)); // true

// 2. Números diferentes de zero
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(42)); // true

// 3. Strings não vazias
console.log(Boolean("Olá")); // true
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true

// 4. Arrays (mesmo vazios)
console.log(Boolean([])); // true
console.log(Boolean([1, 2, 3])); // true

// 5. Objetos (mesmo vazios)
console.log(Boolean({})); // true
console.log(Boolean({ nome: "João" })); // true

// 6. Funções
console.log(Boolean(function () { })); // true

// Exemplos práticos de uso

// Verificação de string vazia
let nome = "";
if (nome) {
  console.log("Nome existe");
} else {
  console.log("Nome não existe");
}

// Verificação de número zero
let quantidade = 0;
if (quantidade) {
  console.log("Tem quantidade");
} else {
  console.log("Não tem quantidade");
}

// Verificação de objeto vazio
let usuario = {};
if (usuario) {
  console.log("Usuário existe");
} else {
  console.log("Usuário não existe");
}

// Verificação de array vazio
let lista = [];
if (lista) {
  console.log("Lista existe");
} else {
  console.log("Lista não existe");
}

// Verificação de undefined
let valor;
if (valor) {
  console.log("Valor existe");
} else {
  console.log("Valor não existe");
}

// Verificação de null
let objeto = null;
if (objeto) {
  console.log("Objeto existe");
} else {
  console.log("Objeto não existe");
}
