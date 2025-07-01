// Operadores de igualdade (==) e desigualdade (!=)
let a = 5;
let b = "5";

// Igualdade (==) - compara apenas o valor
console.log(a == b); // true - porque converte a string "5" para número 5

// Desigualdade (!=) - compara apenas o valor
console.log(a != b); // false - porque os valores são iguais após conversão

// Operadores de igualdade estrita (===) e desigualdade estrita (!==)
let c = 5;
let d = "5";

// Igualdade estrita (===) - compara valor e tipo
console.log(c === d); // false - porque são de tipos diferentes (number vs string)

// Desigualdade estrita (!==) - compara valor e tipo
console.log(c !== d); // true - porque são de tipos diferentes

// Exemplos com diferentes tipos
console.log(1 == true); // true - converte true para 1
console.log(1 === true); // false - tipos diferentes
console.log("" == false); // true - converte ambos para 0
console.log("" === false); // false - tipos diferentes
console.log(null == undefined); // true
console.log(null === undefined); // false
