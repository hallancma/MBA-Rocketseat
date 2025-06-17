class Animal {
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    console.log("Algum som genérico do animal")
  }
}

class Dog extends Animal {

}


class Cat extends Animal {

}

const dog = new Dog("Cachorro");
console.log(dog.name);
dog.makeNoise();

const cat = new Cat("Gato");
console.log(cat.name);
dog.makeNoise();
