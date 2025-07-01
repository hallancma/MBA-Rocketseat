const input = document.querySelector("input");

//keydown - quando uam tecla é pressionada
//Captura tudo

// input.addEventListener("keydown", (event) => {
//   console.log(event);
//   console.log(event.key);
// });


//keypress - quando uma tecla do tipo caractere é pressionada
//letras numeros e etc
input.addEventListener("keypress", (event) => {
  console.log(event.key);
});

input.onchange = (() => {
  //console.log("O input mudou");
  exibeMensagem();
})

function exibeMensagem() {
  console.log("O input mudou");
}