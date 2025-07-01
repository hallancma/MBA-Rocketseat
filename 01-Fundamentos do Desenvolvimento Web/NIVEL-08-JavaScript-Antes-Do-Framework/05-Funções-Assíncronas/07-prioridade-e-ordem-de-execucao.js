//Executa de forma síncrona, imediatamente
console.log(1);

//Microtasks são executadas antes de temporizadores e promessas
queueMicrotask(() => {
  console.log(2);
})

//MacroTask aguarda temporizador ser acionado
setTimeout(() => {
  console.log(3);
}, 2000);

//Executa de forma síncrona, imediatamente
console.log(4);


//Adiciona uma microtask
Promise.resolve(true).then(() => {
  console.log(5);
})
