fetch("http://localhost:3333/products").then((response) => {
  //console.log(response);
  response.json().then((resultado) => {
    console.log(resultado);
  })
});

//console.log(response);