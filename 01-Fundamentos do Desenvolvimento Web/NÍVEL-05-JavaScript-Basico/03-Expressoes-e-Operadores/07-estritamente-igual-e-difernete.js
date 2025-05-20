// Operadores de igualdade estrita (===) e desigualdade estrita (!==)
let a = 5;
let b = "5";

// Igualdade estrita (===) - compara valor e tipo
console.log(a === b); // false - porque são de tipos diferentes (number vs string)

// Desigualdade estrita (!==) - compara valor e tipo
console.log(a !== b); // true - porque são de tipos diferentes

// Exemplos com diferentes tipos
console.log(1 === true); // false - tipos diferentes
console.log("" === false); // false - tipos diferentes
console.log(null === undefined); // false - tipos diferentes

// Exemplos com valores iguais e tipos iguais
console.log(5 === 5); // true - mesmo valor e tipo
console.log("hello" === "hello"); // true - mesmo valor e tipo
console.log(true === true); // true - mesmo valor e tipo

// Exemplos com objetos
let obj1 = { nome: "João" };
let obj2 = { nome: "João" };
console.log(obj1 === obj2); // false - objetos diferentes na memória
console.log(obj1 === obj1); // true - mesmo objeto na memória
