let users = [];
console.log(users);
console.log(users.length);

//Adiciona no final
users.push("Hallan");
users.push("Pedro");
users.push("Marcos");

//Adiciona no inicio
users.unshift("Maria");
console.log(users);
console.log(users.length);

//Remove no inicio
users.shift();
console.log(users);
console.log(users.length);

//Remove do fim
users.pop();
console.log(users);
console.log(users.length);