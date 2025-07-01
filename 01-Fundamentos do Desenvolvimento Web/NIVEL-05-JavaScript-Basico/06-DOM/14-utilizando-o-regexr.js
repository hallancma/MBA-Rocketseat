//Foi apresentando em aula https://regexr.com/
//Afim que possamos testar nossas expressões regularesconst input = document.querySelector("input");
const form = document.querySelector("form");
console.log(input);

// input.addEventListener("input", (event) => {
//   //console.log(input.value);
//   const value = input.value;

//   const regex = /\D+/g;
//   //Retorna quando encotnrar a ocorrencia dentor da string
//   // console.log(value.match(regex));

//   const isValid = regex.test(value);
//   console.log(isValid);
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;

  const regex = /\D+/g;

  if (regex.test(value)) {
    console.log("ok");

  } else {
    alert("Valor inválido, digite corretamente");
  }

  // const value = input.value.replace(regex, "");

  // console.log(value);
})

