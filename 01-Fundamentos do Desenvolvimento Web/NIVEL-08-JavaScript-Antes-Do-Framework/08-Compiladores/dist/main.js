"use strict";

class user {
  constructor(name, idade) {
    this.name = name;
    this.idade = idade;
  }
  greeting() {
    return "Ol\xE1, meu nome \xE9 ".concat(this.name, " e tenho ").concat(this.idade, " anos.");
  }
}
let user_01 = new user("Hallan 2", 39);
console.log(user_01.greeting());