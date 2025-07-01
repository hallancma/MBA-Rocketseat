// Exemplos de argumentos e parâmetros em JavaScript

// 1. Parâmetros básicos
function saudar(nome) {
  console.log(`Olá, ${nome}!`);
}
saudar("Maria"); // "Olá, Maria!"

// 2. Múltiplos parâmetros
function calcularArea(base, altura) {
  return base * altura;
}
console.log(calcularArea(5, 3)); // 15

// 3. Parâmetros com valores padrão
function multiplicar(a, b = 1) {
  return a * b;
}
console.log(multiplicar(5)); // 5
console.log(multiplicar(5, 2)); // 10

// 4. Parâmetros rest (resto)
function somar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(somar(1, 2, 3, 4)); // 10

// 5. Desestruturação de parâmetros
function exibirUsuario({ nome, idade, cidade = "Não informada" }) {
  console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}
exibirUsuario({ nome: "João", idade: 25 }); // Nome: João, Idade: 25, Cidade: Não informada

// 6. Parâmetros com tipos diferentes
function processarDados(dados, tipo = "string") {
  if (tipo === "string") {
    return dados.toString();
  } else if (tipo === "number") {
    return Number(dados);
  }
  return dados;
}
console.log(processarDados(123, "string")); // "123"
console.log(processarDados("123", "number")); // 123

// 7. Parâmetros com validação
function validarIdade(idade) {
  if (typeof idade !== "number") {
    throw new Error("Idade deve ser um número");
  }
  if (idade < 0) {
    throw new Error("Idade não pode ser negativa");
  }
  return idade;
}
try {
  console.log(validarIdade(25)); // 25
  console.log(validarIdade(-5)); // Erro
} catch (erro) {
  console.log(erro.message);
}

// 8. Parâmetros com callback
function processarArray(array, callback) {
  return array.map(callback);
}
const numeros = [1, 2, 3, 4];
const dobrados = processarArray(numeros, (num) => num * 2);
console.log(dobrados); // [2, 4, 6, 8]

// 9. Parâmetros com objeto de configuração
function criarUsuario({ nome, email, idade = 18, ativo = true }) {
  return {
    nome,
    email,
    idade,
    ativo,
    dataCriacao: new Date()
  };
}
const usuario = criarUsuario({ nome: "Ana", email: "ana@email.com" });
console.log(usuario);

// 10. Parâmetros com funções geradoras
function* gerarSequencia(inicio, fim, passo = 1) {
  for (let i = inicio; i <= fim; i += passo) {
    yield i;
  }
}
const sequencia = gerarSequencia(1, 5);
console.log([...sequencia]); // [1, 2, 3, 4, 5]
