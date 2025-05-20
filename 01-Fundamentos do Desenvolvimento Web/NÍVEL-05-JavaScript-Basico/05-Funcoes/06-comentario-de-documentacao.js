// Exemplos de comentários de documentação em JavaScript

// 1. Documentação básica de função
/**
 * Calcula a soma de dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} A soma dos dois números
 */
function somar(a, b) {
  return a + b;
}

// 2. Documentação com múltiplos parâmetros e tipos
/**
 * Cria um objeto de usuário
 * @param {string} nome - Nome do usuário
 * @param {number} idade - Idade do usuário
 * @param {string} [cidade="Não informada"] - Cidade do usuário (opcional)
 * @returns {Object} Objeto com dados do usuário
 */
function criarUsuario(nome, idade, cidade = "Não informada") {
  return { nome, idade, cidade };
}

// 3. Documentação com exemplos
/**
 * Verifica se um número é par
 * @param {number} numero - Número a ser verificado
 * @returns {boolean} true se o número for par, false caso contrário
 * @example
 * // Retorna true
 * verificarPar(2)
 * // Retorna false
 * verificarPar(3)
 */
function verificarPar(numero) {
  return numero % 2 === 0;
}

// 4. Documentação com tipos complexos
/**
 * Processa uma lista de números
 * @param {Array<number>} numeros - Array de números
 * @param {Function} callback - Função de processamento
 * @returns {Array<number>} Array com números processados
 */
function processarNumeros(numeros, callback) {
  return numeros.map(callback);
}

// 5. Documentação com exceções
/**
 * Divide dois números
 * @param {number} a - Numerador
 * @param {number} b - Denominador
 * @returns {number} Resultado da divisão
 * @throws {Error} Se o denominador for zero
 */
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
}

// 6. Documentação de classe
/**
 * Classe que representa um retângulo
 * @class
 */
class Retangulo {
  /**
   * Cria uma instância de Retangulo
   * @param {number} largura - Largura do retângulo
   * @param {number} altura - Altura do retângulo
   */
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  /**
   * Calcula a área do retângulo
   * @returns {number} Área do retângulo
   */
  calcularArea() {
    return this.largura * this.altura;
  }
}

// 7. Documentação com tipos personalizados
/**
 * @typedef {Object} Usuario
 * @property {string} nome - Nome do usuário
 * @property {number} idade - Idade do usuário
 * @property {string[]} hobbies - Lista de hobbies
 */

/**
 * Cria um novo usuário
 * @param {Usuario} dados - Dados do usuário
 * @returns {Usuario} Usuário criado
 */
function criarNovoUsuario(dados) {
  return {
    ...dados,
    dataCriacao: new Date()
  };
}
