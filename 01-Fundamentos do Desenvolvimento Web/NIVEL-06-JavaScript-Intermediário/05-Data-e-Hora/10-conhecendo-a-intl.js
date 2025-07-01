//Obtem informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions();

console.log(currentLocale);

//Exibe no formato de acordo com localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));
console.log(new Intl.DateTimeFormat("en-US").format(new Date()));


// Obtém, a diferença do timezone em minutos
let date = new Date();
console.log(date.getTimezoneOffset());
// Obtém, a diferença do timezone em horas
console.log(date.getTimezoneOffset() / 60);

