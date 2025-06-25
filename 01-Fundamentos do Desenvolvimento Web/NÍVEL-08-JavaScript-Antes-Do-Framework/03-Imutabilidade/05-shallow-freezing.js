const book = {
  title: "Objetos Imutáveis",
  category: "javascript",
  author: {
    name: "hallan",
    email: "hallancma@gmail.com"
  }
}

//O Jaavascript em is não impõe restrições ã modificações dos objetos
// book.category = "HTML";


//Congela o objeto e impede a modificação
Object.freeze(book);
book.category = "HTML";// não modifica
console.log(book);

//O object.freeze() nõa impede modificações profundas em objetos 
// aninhados (shallow freezing)
book.author.name = "Pedro";
console.log(book);