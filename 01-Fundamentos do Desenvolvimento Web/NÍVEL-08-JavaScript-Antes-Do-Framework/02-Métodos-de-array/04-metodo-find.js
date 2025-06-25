// O método find() retorna o valor do primeiro elemento do
// array que satisfizer a condição. Caso contrário, undefined é
// retornado.


const values = [5, 12, 8, 8, 130, 44];

const found = values.find((value) => value > 10);

console.log(found);

const obj = [
  { name: "apple", quantity: 23 },
  { name: "orange", quantity: 25 },
  { name: "banana", quantity: 52 },
]

const result = obj.find((o) => o.name == "banana")

console.log(result);