// Comentário de linha única: explica rapidamente uma linha ou bloco de código
const nome = "João"; // Armazena o nome do usuário

/*
  Comentário de múltiplas linhas:
  Útil para explicar trechos maiores de código,
  lógica complexa ou instruções detalhadas.
*/
const idade = 25;

/**
 * Função que soma dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma de a e b.
 */
const somar = (a, b) => {
  return a + b;
};

// Exemplo de uso da função somar
const resultado = somar(2, 3); // resultado será 5
console.log(resultado);
