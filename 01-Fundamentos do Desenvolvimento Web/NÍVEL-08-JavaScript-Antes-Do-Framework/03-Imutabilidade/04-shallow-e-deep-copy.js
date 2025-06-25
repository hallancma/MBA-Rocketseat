// Shallow Copy (cópia superficial): não pega os itens aninhados.
const htmlCourse = {
  course: "HTML",
  students: [{ name: "Hallan", email: "hallancma@gmail.com" }]
}

// const jsCourse = {
//   ...htmlCourse,
//   course: "Javascript"
// }

// console.log(htmlCourse, jsCourse);

//Vai modificar o htmlCourse também students é uma referência e não uma cópia
// jsCourse.students.push({ name: "João", email: "teste@gmail.com" });
// console.log(htmlCourse, jsCourse);

// Deep Copy (cópia profunda)

// const jsCourse = {
//   ...htmlCourse,
//   course: "Javascript",
//   students: [...htmlCourse.students, { name: "João", email: "teste@gmail.com" }]
// }



// jsCourse.students.push({ name: "José", email: "jose@gmail.com" });


const jsCourse = {
  ...htmlCourse,
  course: "Javascript"
}
jsCourse.students = [
  ...htmlCourse.students,
  { name: "Maria", email: "maria@gmail.com" }
]
console.log(htmlCourse, jsCourse);