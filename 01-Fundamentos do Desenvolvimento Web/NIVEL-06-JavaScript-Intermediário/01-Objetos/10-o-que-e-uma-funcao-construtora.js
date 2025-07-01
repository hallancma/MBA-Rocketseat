function createProduct(name) {
  const product = {}

  product.name = name;
  product.details = function () {
    console.log(`O nome do produto é ${this.name}`);
  }
  return product;
}

const product1 = new createProduct("Teclado");
console.log(product1.name);
product1.details();

const product2 = new createProduct("Mouse");
console.log(product2.name);
product2.details();

console.log(product1 === product2);

//Exemplo de funções construtoras disponíveis no próprio JS
let myName = new String("Rodrigo");
console.log(myName);

let price = "40.6".replace(".", ",");
console.log(price);

let date = new Date("2024-01-01");
console.log(date);

function Person(name) {
  this.name = name;
  this.message = function () {
    console.log(`Olá ${this.name}`)
  }
}

const Person1 = new Person("Hallan");
Person1.message();