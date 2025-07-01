// O método filter() cria um novo array com todos os elementos que passarem 
//na condição


const words = ["JAcascript", "CSS", "HTML", "Web"];

const result = words.filter((word) => word.length > 3);

console.log(result);

const products = [
  { description: "Teclado", price: 150, promotion: true },
  { description: "Mouse", price: 100, promotion: false },
  { description: "Monitor", price: 500, promotion: true },
]

const promotion = products.filter((product) => product.promotion == true);
console.log(promotion);