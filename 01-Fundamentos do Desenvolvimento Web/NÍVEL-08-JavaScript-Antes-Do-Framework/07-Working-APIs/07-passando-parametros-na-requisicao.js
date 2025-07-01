/*
Passando parâmetros na requisição
Nesta aula, criaremos uma nova função em JavaScript para buscar um produto específico usando async e o await. Com a interpolação de strings, podemos passar o ID como parâmetro ao chamar a função. Assim, conseguimos buscar produtos específicos de forma dinâmica. É importante entender como passar parâmetros para requisições.
* */
//Utilizando o fetch com async/await

async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  console.log(data);
}
//fetchProducts();

async function fetchProductsById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`);
  const data = await response.json();
  console.log(data);
}

fetchProductsById(1);