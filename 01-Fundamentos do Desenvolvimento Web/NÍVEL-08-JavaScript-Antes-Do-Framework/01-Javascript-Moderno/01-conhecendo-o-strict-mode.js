// O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no Javascript.
"use strict"
function showMessage() {

  let personName = "Hallan";
  console.log("Olá", personName);
}

showMessage();


class Student {
  get point() {
    return 7
  }
}

let student = new Student();

// delete window.document

//student.point = 10;


// function sum(a, a, c) {
//   return a + a + c;
// }

// const result = sum (1, 3, 2);
// console.log("RESULTADO: ",result);