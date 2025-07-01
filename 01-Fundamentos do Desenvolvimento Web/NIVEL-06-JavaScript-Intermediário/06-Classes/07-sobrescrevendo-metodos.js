class Animal {
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    console.log("Algum som genérico do animal")
  }
}

class Dog extends Animal {
  makeNoise() {
    console.log("Woof...Woof....Woof");
  }

  run() {
    console.log("correndo...");
  }
}


class Cat extends Animal {
  makeNoise() {
    console.log("Miau...Miau....Miau")
  }
}

const dog = new Dog("Cachorro");
console.log(dog.name);
dog.makeNoise();
dog.run();

const cat = new Cat("Gato");
console.log(cat.name);
dog.makeNoise();
