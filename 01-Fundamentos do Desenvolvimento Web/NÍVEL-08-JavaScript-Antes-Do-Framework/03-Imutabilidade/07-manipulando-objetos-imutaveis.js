const book = {
  title: "Objetos Imutáveis",
  category: "javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@email.com",
  },
}
//Origal intacto
// console.log(book);

//Modificado
const updatedBook = {
  ...book,
  title: "Criando um Front-end moderno com HML",
  category: "HTML",
  type: "Programming"
}


// console.log(updatedBook);

//Utilizando o operador de desestruturação (rest operator) para remover propriedades
const { category, ...bookWithoutCategory } = book;
console.log(bookWithoutCategory);