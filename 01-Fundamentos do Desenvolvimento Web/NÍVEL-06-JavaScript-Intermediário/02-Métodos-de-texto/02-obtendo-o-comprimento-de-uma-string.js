let message = "Estou estudando os fundamentos do JavaScript";

//Comprimento de uma string
console.log(message.length);

let password = "12345";

if (password.length < 6) {
  console.log("A senha deve ter ao menos 6 caracteres");
}

//Quantos dígito tem um número

let value = 12345;
console.log(String(value).length);
console.log(value.toString().length);