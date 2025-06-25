const product = {
  description: "Teclado",
  price: 150
}

const { description, price } = product;

console.log(description, price);

function newProduct({ description, price }) {
  console.log("###Novo Produto###");
  console.log("Descrição: ", description);
  console.log("Preço: ", price);
}

newProduct("Mouse", 70);
newProduct({ description: "Teclado", price: "100" });