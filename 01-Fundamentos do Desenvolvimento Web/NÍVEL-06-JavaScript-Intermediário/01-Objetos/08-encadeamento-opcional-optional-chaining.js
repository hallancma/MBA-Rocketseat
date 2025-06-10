/*
OPTIONAL CHAINING (?.) - encadeamento opcional
Se a propriedade ou função chamada é nullish
(null or undefined), a expressão retorna undefined em vez de gerar um erro.

Útil ao explorar o conteúdo de um objeto
quando não existe garantia da existência de
determinadas propriedades obrigatórias.
*/
const user = {
  id: 1,
  name: "Hallan",
  address: {
    street: "Rua teste",
    city: "Ubatuba",
    geo: {
      latitude: 47.8080,
      longitude: 17.5674
    }
  },
  message: function () {
    console.log(`Ola ${this.name}`)
  }

}

// console.log(user);
// console.log(user.name);
user.message?.();

console.log(user?.address?.street3);



