// console.log(user);
// var user = "John";


// Hosting
// var user;
// console.log(user);

// escopo global
var email = "john@email.com";

{
  //Escopo de bloco
  console.log(email);
}

{
  // let age = 25 nao funciona;
  var age = 25;
}
console.log(age);


