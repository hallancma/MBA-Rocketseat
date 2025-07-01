const book = {
  title: "Objetos Imutáveis",
  category: "javascript",
  author: {
    name: "Hallan",
    email: "hallancma@gmail.com"
  }
}

function deepFreeze(object) {
  //Obtém um array com todas as propriedades do objeto
  const props = Reflect.ownKeys(object);
  //Itera sobre todas as propriedades do objeto
  for (const prop of props) {
    // Obtém o valor associado ã propriedade atual.
    const value = object[prop];
    //Verifica se o valor é um objeto ou função para continuar aplicando 
    //o deepFreeze em objetos aninhados

    if (value && typeof value === "object" || typeof value === "function") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

//Chama a função para congelar o objeto com Deep Freeze(Imutabilidade)

deepFreeze(book);

book.category = "HTML";
book.author.name = "Pedro";

