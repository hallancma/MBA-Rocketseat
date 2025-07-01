const address1 = {
  street: "Av.Brasil",
  number: 20
}

//Isso não é uma cópia. É um referência
// const address2 = address1;
// address2.number = 55;
// console.log(address1);
// console.log(address2);


//Aqui estamos criando um novo objeto
const address2 = { ...address1 };
address2.number = 89;
console.log(address1);
console.log(address2);

const address3 = { ...address1, number: 45 };
console.log(address3);

const address4 = { number: 33, ...address1 };
console.log(address4);

//Exemplo com Array

const list1 = ["Apple", "Banana"];
const list2 = list1;
console.log(list1, list2);

list2.push("Watermelons");
console.log(list1, list2);

const list3 = [...list1];
list3.push("Orange");
console.log(list1, list3);

