// Função que retorna uma promisse

function asyncFunction() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve("A operação foi concluída com sucesso!");
      } else {
        reject("Algo deu errado!");
      }
    }, 3000);
  })
}
//Visualizando se o retorno é uma promisse
// console.log(asyncFunction());
console.log("Executando função assíncrona");

// const response = asyncFunction();
// console.log(response);

asyncFunction().then((response) => {
  console.log("Sucesso: ", response);
}).catch((error) => {
  console.log("Error: ", error);
}).finally(() => {
  console.log("Finalizou...");
});
