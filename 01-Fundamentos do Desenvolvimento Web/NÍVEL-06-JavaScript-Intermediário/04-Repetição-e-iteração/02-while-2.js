// while: executa até que a condição seja verdadeira

let execute = true;
while (execute) {
  let response = window.prompt("Deseja continuar? 1 (SIM) 2 (NÃO)");
  if (response === "2") {
    execute = false;
  }
}

console.log("Segue o fluxo...");