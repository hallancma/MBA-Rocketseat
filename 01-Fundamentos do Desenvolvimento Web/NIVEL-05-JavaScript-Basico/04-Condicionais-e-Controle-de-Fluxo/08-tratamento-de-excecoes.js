// Exemplos de tratamento de exceções em JavaScript

// 1. Try/Catch básico
try {
  let resultado = 10 / 0;
  console.log(resultado);
} catch (erro) {
  console.log("Ocorreu um erro:", erro.message);
}

// 2. Try/Catch com Finally
try {
  let numero = parseInt("abc");
  console.log(numero);
} catch (erro) {
  console.log("Erro ao converter string para número:", erro.message);
} finally {
  console.log("Este bloco sempre será executado");
}

// 3. Try/Catch com múltiplos tipos de erro
try {
  let array = [1, 2, 3];
  console.log(array[10]); // Índice fora dos limites
} catch (erro) {
  if (erro instanceof TypeError) {
    console.log("Erro de tipo:", erro.message);
  } else if (erro instanceof RangeError) {
    console.log("Erro de intervalo:", erro.message);
  } else {
    console.log("Erro desconhecido:", erro.message);
  }
}

// 4. Try/Catch com função personalizada
function dividirNumeros(a, b) {
  try {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
  } catch (erro) {
    console.log("Erro na divisão:", erro.message);
    return null;
  }
}

console.log(dividirNumeros(10, 2)); // 5
console.log(dividirNumeros(10, 0)); // null

// 5. Try/Catch com Promise
async function buscarDados() {
  try {
    const response = await fetch('https://api.exemplo.com/dados');
    const dados = await response.json();
    console.log(dados);
  } catch (erro) {
    console.log("Erro ao buscar dados:", erro.message);
  }
}

// 6. Try/Catch com validação de dados
function validarIdade(idade) {
  try {
    if (typeof idade !== 'number') {
      throw new TypeError("Idade deve ser um número");
    }
    if (idade < 0) {
      throw new RangeError("Idade não pode ser negativa");
    }
    return true;
  } catch (erro) {
    console.log("Erro na validação:", erro.message);
    return false;
  }
}

console.log(validarIdade(25)); // true
console.log(validarIdade("25")); // false
console.log(validarIdade(-5)); // false

// 7. Try/Catch com manipulação de arquivos
try {
  // Simulando operação com arquivo
  const arquivo = {
    ler: () => {
      throw new Error("Arquivo não encontrado");
    }
  };
  arquivo.ler();
} catch (erro) {
  console.log("Erro ao ler arquivo:", erro.message);
}

// 8. Try/Catch com tratamento de JSON
try {
  const jsonInvalido = "{'nome': 'João'}"; // JSON inválido
  const objeto = JSON.parse(jsonInvalido);
  console.log(objeto);
} catch (erro) {
  console.log("Erro ao analisar JSON:", erro.message);
}
