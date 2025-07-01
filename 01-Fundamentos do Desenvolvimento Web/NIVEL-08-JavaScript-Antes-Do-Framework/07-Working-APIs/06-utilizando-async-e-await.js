//Utilizando o fetch com async/await

async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  console.log(data);
}
fetchProducts();

//Utilizando o fetch com o then
// fetch("http://localhost:3333/products").then((response) => {
//   //console.log(response); q
//   response.json().then((resultado) => {
//     console.log(resultado);
//   })
// });

//console.log(response);
console.log("Aguardando resposta...");
