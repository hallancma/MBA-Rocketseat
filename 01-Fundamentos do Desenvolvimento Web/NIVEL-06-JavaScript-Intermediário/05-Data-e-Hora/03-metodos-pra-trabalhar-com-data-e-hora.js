// let date = new Date("2024-07-02T14:30:10");
// console.log(date);
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());


let date = new Date("2025-06-11T05:24:10");

console.log("📍 Data original criada (interpreta como horário local):");
console.log(date.toString()); // Exibe no fuso horário da sua máquina (ex: Brasília)

console.log("\n🌍 Data em UTC:");
console.log(date.toISOString()); // Converte para formato UTC com sufixo "Z"

console.log("\n🧠 Resumo:");
console.log("Horário local  =>", date.toLocaleString());
console.log("Horário UTC    =>", date.toUTCString());
