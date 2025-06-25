// spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos.

const numbers = [1, 2, 3];

console.log(numbers);

console.log(...numbers);

const data = [
  {
    name: "Hallan",
    email: "hallancma@gmail.com",
    avatar: "logoH.ico"
  },
  {
    name: "José",
    email: "jose@gmail.com",
    avatar: "logoJ.ico"
  }
]

console.log(data);
console.log(...data);