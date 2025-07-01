const creditCard = "1234567812344928";
console.log(creditCard.length);


const lastDigits = creditCard.slice(-4);
console.log(lastDigits);

// O PadStart preenche a String do início
const maskedNumber = lastDigits.padStart(creditCard.length, "X");
console.log(maskedNumber);

// O PadStart preenche a String no final
const maskedNumberEnd = lastDigits.padEnd(creditCard.length, "X");
console.log(maskedNumberEnd);