// Operador de Agrupamento (Grouping Operator)
// O operador de agrupamento () é usado para alterar a precedência de operadores em uma expressão

// Exemplo 1: Alterando a ordem de operações matemáticas
let resultado1 = (2 + 3) * 4; // 20 (primeiro soma, depois multiplica)
let resultado2 = 2 + (3 * 4); // 14 (primeiro multiplica, depois soma)

// Exemplo 2: Agrupando expressões lógicas
let a = true;
let b = false;
let c = true;
let resultado3 = (a && b) || c; // true (primeiro avalia a && b, depois faz o OR com c)
let resultado4 = a && (b || c); // true (primeiro avalia b || c, depois faz o AND com a)

// Exemplo 3: Agrupando expressões de template string
let nome = "João";
let idade = 25;
let mensagem = `Olá, ${(nome + " tem " + idade + " anos")}`; // "Olá, João tem 25 anos"

// Exemplo 4: Agrupando expressões de função
const calcular = (a, b) => (a + b) * 2; // Primeiro soma, depois multiplica por 2
console.log(calcular(3, 4)); // 14

// Exemplo 5: Agrupando expressões de array
let numeros = [1, 2, 3, 4, 5];
let resultado5 = numeros.map(num => (num * 2) + 1); // [3, 5, 7, 9, 11]

// Exemplo 6: Agrupando expressões de objeto
let pessoa = {
  nome: "Maria",
  idade: 30,
  getInfo: function () {
    return (this.nome + " tem " + this.idade + " anos");
  }
};

// Imprimindo os resultados
console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);
console.log("Resultado 4:", resultado4);
console.log("Resultado 5:", resultado5);
console.log("Info da pessoa:", pessoa.getInfo());
