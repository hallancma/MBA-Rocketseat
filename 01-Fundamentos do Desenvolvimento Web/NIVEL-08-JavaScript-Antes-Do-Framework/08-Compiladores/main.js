class user {
  constructor(name, idade) {
    this.name = name;
    this.idade = idade;
  }
  greeting() {
    return `Olá, meu nome é ${this.name} e tenho ${this.idade} anos.`;
  }
}
let user_01 = new user("Hallan 2", 39);
console.log(user_01.greeting());
