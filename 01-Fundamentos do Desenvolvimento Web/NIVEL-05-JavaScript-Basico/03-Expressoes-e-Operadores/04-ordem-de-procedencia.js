//Ordem de procedência
// Exemplos de ordem de precedência com operadores matemáticos

// 1. Parênteses têm a maior precedência
let resultado1 = (2 + 3) * 4; // 20 (primeiro soma, depois multiplica)
let resultado2 = 2 + (3 * 4); // 14 (primeiro multiplica, depois soma)

// 2. Multiplicação e divisão têm precedência sobre adição e subtração
let resultado3 = 2 + 3 * 4; // 14 (3 * 4 = 12, depois 2 + 12)
let resultado4 = 10 - 4 / 2; // 8 (4 / 2 = 2, depois 10 - 2)

// 3. Módulo (%) tem a mesma precedência que multiplicação e divisão
let resultado5 = 10 % 3 * 2; // 2 (10 % 3 = 1, depois 1 * 2)
let resultado6 = 10 * 3 % 2; // 0 (10 * 3 = 30, depois 30 % 2)

// 4. Exponenciação (**) tem precedência sobre multiplicação
let resultado7 = 2 * 3 ** 2; // 18 (3 ** 2 = 9, depois 2 * 9)
let resultado8 = (2 * 3) ** 2; // 36 (2 * 3 = 6, depois 6 ** 2)

// 5. Exemplo complexo combinando diferentes operadores
let resultado9 = 2 + 3 * 4 ** 2 - 10 / 2; // 48
// Passo a passo:
// 1. 4 ** 2 = 16
// 2. 3 * 16 = 48
// 3. 10 / 2 = 5
// 4. 2 + 48 - 5 = 45

// 6. Usando parênteses para forçar uma ordem específica
let resultado10 = (2 + 3) * (4 - 1); // 15
let resultado11 = ((2 + 3) * 4) ** 2; // 400

// Imprimindo os resultados
console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);
console.log("Resultado 4:", resultado4);
console.log("Resultado 5:", resultado5);
console.log("Resultado 6:", resultado6);
console.log("Resultado 7:", resultado7);
console.log("Resultado 8:", resultado8);
console.log("Resultado 9:", resultado9);
console.log("Resultado 10:", resultado10);
console.log("Resultado 11:", resultado11);
