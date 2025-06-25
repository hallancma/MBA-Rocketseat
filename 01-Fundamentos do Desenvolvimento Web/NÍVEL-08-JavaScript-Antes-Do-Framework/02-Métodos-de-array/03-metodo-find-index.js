// O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.


const values = [4, 6, 8, 9, 10];
const index = values.findIndex((value) => value > 4);
console.log(index);
console.log(values[index]);

const index2 = values.findIndex((value) => value == 40);
console.log(index2);