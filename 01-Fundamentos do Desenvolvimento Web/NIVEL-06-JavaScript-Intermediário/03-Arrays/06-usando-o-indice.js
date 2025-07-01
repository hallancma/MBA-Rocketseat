let fruits = ["Apple", "Watermelon", "Strawberry", "Lemon"];
console.log(fruits);
console.log(fruits.length);

//Encontra e retorna o índice do array, se não encontra retorna -1
let position = fruits.indexOf("Strawberry");
console.log(position);

//Remove um item pela posição do item(1 parâmetro é posição e 2 é quantidade)
// fruits.splice(1, 2);
fruits.splice(position, 1);
console.log(fruits);