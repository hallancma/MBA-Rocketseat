// destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const data = ["Hallan", "hallancma@gmail.com"];

//Desestrturando array
const [username, email] = data;

console.log(`${username} e ${email}`);


const fruits = ["banana", "maça", "laranja"];

//Desestrturar soemnte o primeiro

const [fruta01, fruta02] = fruits;
console.log(fruta01);

//Ignorando o primeiro na desestruturação

const [, fruta] = fruits;
console.log(fruta);

const [, , fruta3] = fruits;
console.log(fruta3);

