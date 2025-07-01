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


