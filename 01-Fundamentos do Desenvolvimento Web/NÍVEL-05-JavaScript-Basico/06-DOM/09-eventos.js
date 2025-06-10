window.addEventListener("load", () => {
  console.log('Carregou')
});

addEventListener("click", (event) => {
  event.preventDefault();
  //Retorna todas informações do evento
  // console.log(event);

  //Retorna o elemento clicado
  // console.log(event.target);

  //Retornar o textContent do elemento clicado 
  console.log(event.target.textContent);
})