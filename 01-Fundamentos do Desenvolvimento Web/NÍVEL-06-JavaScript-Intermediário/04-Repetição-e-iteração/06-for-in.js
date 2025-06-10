// for...in executa iterações a partir de um objeto
// e percorre as propriedades.


let person = {
  name: "Hallan",
  surname: "Christian",
  email: "hallancma@gmail.com"
}

for (let property in person) {
  //Exibe o nome da propriedade
  console.log(property);

  //Exibe o conteúdo da propriedade
  console.log(person[property]);

}

let students = ["Hallan", "João", "Maria"];

for (let index in students) {
  console.log(index);
  console.log(students[index]);
}

