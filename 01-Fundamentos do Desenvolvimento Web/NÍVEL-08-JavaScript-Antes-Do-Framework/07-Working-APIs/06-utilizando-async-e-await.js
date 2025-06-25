//Utilizando o fetch com async/await

async function fetchProduts() {
  const response = await fetch("http://localhost:3333/products");
  const data - awat response.json();
  console.log(data);
}


//Utilizando o fetch com o then
// fetch("http://localhost:3333/products").then((response) => {
//   //console.log(response);
//   response.json().then((resultado) => {
//     console.log(resultado);
//   })
// });

//console.log(response);