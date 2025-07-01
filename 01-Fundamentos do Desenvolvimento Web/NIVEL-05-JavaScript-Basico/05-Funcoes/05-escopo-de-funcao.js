// Exemplos de escopo de função em JavaScript

// 1. Escopo Global
const variavelGlobal = "Sou uma variável global";

function exemploEscopoGlobal() {
  console.log(variavelGlobal); // Acessível dentro da função
}
exemploEscopoGlobal();

// 2. Escopo Local (Função)
function exemploEscopoLocal() {
  const variavelLocal = "Sou uma variável local";
  console.log(variavelLocal); // Acessível dentro da função
}
// console.log(variavelLocal); // Erro: variavelLocal is not defined

// 3. Escopo de Bloco
function exemploEscopoBloco() {
  if (true) {
    const variavelBloco = "Sou uma variável de bloco";
    console.log(variavelBloco); // Acessível dentro do bloco
  }
  // console.log(variavelBloco); // Erro: variavelBloco is not defined
}

// 4. Escopo Aninhado
const variavelExterna = "Sou externa";

function funcaoExterna() {
  const variavelInterna = "Sou interna";

  function funcaoInterna() {
    console.log(variavelExterna); // Acessível
    console.log(variavelInterna); // Acessível
  }

  funcaoInterna();
}

// 5. Escopo com let e const
function exemploLetConst() {
  let contador = 0;
  const MAXIMO = 5;

  for (let i = 0; i < MAXIMO; i++) {
    contador++;
  }

  console.log(contador); // 5
  // console.log(i); // Erro: i is not defined
}

// 6. Escopo com var (hoisting)
function exemploVar() {
  console.log(variavelVar); // undefined
  var variavelVar = "Sou uma variável var";
  console.log(variavelVar); // "Sou uma variável var"
}

// 7. Escopo com Closure
function criarContador() {
  let contador = 0;

  return {
    incrementar: function () {
      contador++;
      return contador;
    },
    decrementar: function () {
      contador--;
      return contador;
    }
  };
}

const contador = criarContador();
console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.decrementar()); // 1

// 8. Escopo com Arrow Functions
const objeto = {
  valor: 42,
  metodo: function () {
    setTimeout(() => {
      console.log(this.valor); // 42 (this mantém o contexto)
    }, 1000);
  }
};

// 9. Escopo com IIFE (Immediately Invoked Function Expression)
(function () {
  const variavelPrivada = "Sou privada";
  console.log(variavelPrivada); // Acessível apenas dentro da IIFE
})();
// console.log(variavelPrivada); // Erro: variavelPrivada is not defined

// 10. Escopo com Módulos
const modulo = (function () {
  let privado = "Sou privado";

  return {
    publico: function () {
      return privado;
    }
  };
})();

console.log(modulo.publico()); // "Sou privado"
// console.log(modulo.privado); // undefined
