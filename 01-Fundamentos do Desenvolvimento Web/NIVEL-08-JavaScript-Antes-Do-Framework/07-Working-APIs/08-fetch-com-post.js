/*
Fetch com Post
Nesta aula, aprenderemos a utilizar o método POST para enviar dados e cadastrar um novo produto na API. Criaremos um formulário no HTML para coletar informações do usuário e utilizaremos JavaScript para enviar esses dados para a API. Demonstraremos como configurar a requisição fetch com o método POST, definir o tipo de conteúdo como JSON e serializar os dados antes do envio. Ao final, testaremos o cadastro de produtos na API.
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

//fetchProductsById(1);

const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const form = document.getElementsByTagName("form");

addEventListener("submit", async (event) => {
  event.preventDefault();

  fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: productName.value,
      price: productPrice.value,
    })
  });



  await fetchProducts();


  //console.log("Enviando...");
})

// Exemplo de uso do fetch com POSTr  r