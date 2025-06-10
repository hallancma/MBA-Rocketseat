// Exemplos de uso do try-catch-finally em JavaScript

// 1. Exemplo básico de try-catch-finally
try {
  console.log("Tentando executar código...");
  throw new Error("Erro proposital ");
} catch (erro) {
  console.log("Erro capturado:", erro.message);
} finally {
  console.log("Este bloco sempre será executado, independente de erro");
}

// 2. Exemplo com operações matemáticas
function dividirNumeros(a, b) {
  try {
    r
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
  } catch (erro) {
    console.log("Erro na divisão:", erro.message);
    return null;
  } finally {
    console.log("Operação de divisão finalizada");
  }
}

console.log(dividirNumeros(10, 2)); // 5
console.log(dividirNumeros(10, 0)); // null

// 3. Exemplo com manipulação de arquivos
try {
  // Simulando operação com arquivo
  const arquivo = {
    ler: () => {
      throw new Error("Arquivo não encontrado");
    },
    fechar: () => {
      console.log("Arquivo fechado");
    }
  };

  arquivo.ler();
} catch (erro) {
  console.log("Erro ao ler arquivo:", erro.message);
} finally {
  // Garantindo que o arquivo seja fechado mesmo em caso de erro
  arquivo.fechar();
}

// 4. Exemplo com validação de dados
function validarUsuario(usuario) {
  try {
    if (!usuario.nome) {
      throw new Error("Nome é obrigatório");
    }
    if (!usuario.email) {
      throw new Error("Email é obrigatório");
    }
    return true;
  } catch (erro) {
    console.log("Erro na validação:", erro.message);
    return false;
  } finally {
    console.log("Validação de usuário concluída");
  }
}

const usuario1 = { nome: "João", email: "joao@email.com" };
const usuario2 = { nome: "Maria" };

console.log(validarUsuario(usuario1)); // true
console.log(validarUsuario(usuario2)); // false

// 5. Exemplo com tratamento de JSON
try {
  const jsonInvalido = "{'nome': 'João'}"; // JSON inválido
  const objeto = JSON.parse(jsonInvalido);
  console.log(objeto);
} catch (erro) {
  console.log("Erro ao analisar JSON:", erro.message);
} finally {
  console.log("Processamento de JSON finalizado");
}
