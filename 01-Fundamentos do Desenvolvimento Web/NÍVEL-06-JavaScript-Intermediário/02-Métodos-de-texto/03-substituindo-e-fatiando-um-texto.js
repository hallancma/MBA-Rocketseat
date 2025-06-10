let message = "Estou estudando os fundamentos do JavaScript.";


console.log(message);
// Substituir parte de um texto
console.log(message.replace(".", ","));

// Extraindo uma parte da string (start, end)
console.log(message.slice(0, 5));
console.log(message.slice(6, 30));

// Extraindo uma parte da string de trás para frente
console.log(message.slice(-11));

let textWithSpace = "   Texto de exemplo             ";
console.log(textWithSpace.length);
console.log(textWithSpace);
//Remove espaços em branco no início e final da string
console.log(textWithSpace.trim());

