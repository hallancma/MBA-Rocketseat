

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

// async function fetch() {
//   const response = await asyncFunction();
//   console.log(response);
// }

const fetch = async () => {
  try {
    const response = await asyncFunction();
    console.log("Sucesso: ", response);
  } catch (error) {
    console.log("Erro: ", error);
  } finally {
    console.log("Fim da execução");
  }

}

fetch();