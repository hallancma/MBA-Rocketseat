let myArray = [
  "Um texto",
  10,
  true,
  function () {
    console.log("Função dentro do array")
  },
  {
    name: "Hallan",
    email: "hallancma@gmail.com"
  }
];


console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
myArray[3]();
console.log(myArray[4].name);
console.log(myArray[4].email);