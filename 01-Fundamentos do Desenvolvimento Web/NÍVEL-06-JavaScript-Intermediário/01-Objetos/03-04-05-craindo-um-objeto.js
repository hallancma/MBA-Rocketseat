// console.log("Hello World");

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// console.log(person);

const obj = {

}
// console.log(typeof obj);

const user = {
  email: "hallancma@gmail.com",
  age: 38,
  name: {
    firstName: "Hallan",
    surname: "Christian"
  },
  address: {
    street: "Rua dos bobos",
    number: 102,
    city: "Ubatuba",
    postal_code: "11680-000"
  },
  message: () => { console.log(`"Oi Hallan!"`) },
  funcaoUsandoProprioObjeto() {
    console.log(`Oi ${this.name.firstName} ${this.name.surname}`);
  }
}

const person = {
  name: "John",
  age: 30,
  city: "New York",
};
//Acessando propriedade e métodos usando a notação de ponto.
console.log(user.name.firstName, user.email, user.address.street);

user.message();
user.funcaoUsandoProprioObjeto();

//Acessando propriedade e métodos usando a notação de colchetes.
console.log(user["email"]);
user["message"]();
user["funcaoUsandoProprioObjeto"]();