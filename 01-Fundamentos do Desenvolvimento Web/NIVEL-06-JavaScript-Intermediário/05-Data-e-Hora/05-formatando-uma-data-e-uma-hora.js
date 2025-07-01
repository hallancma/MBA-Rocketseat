let date = new Date("2025-06-05T05:30:00");

//Formata para dia sempre ter 2 dígitos
let day = (date.getDate());
console.log(day.toString().padStart(2, "0"));


//Formata para mês sempre ter 2 dígitos
let month = (date.getMonth() + 1);
console.log(month.toString().padStart(2, "0"));

let year = date.getFullYear();
let hour = date.getHours();
let minuto = date.getMinutes();

console.log(`${day}/${month}/${year}`)