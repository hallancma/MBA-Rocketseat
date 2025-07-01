// Funções assíncronas permitem que operações que levam tempo (como requisições a APIs, leitura de arquivos, timers, etc.) sejam executadas sem bloquear o restante do código. 
// Em JavaScript, usamos a palavra-chave `async` para declarar uma função assíncrona e `await` para esperar a resolução de uma Promise dentro dela.

// Exemplo de função assíncrona simulando uma requisição a uma API usando setTimeout:

const fetchUserData = async () => {
  // Simula um delay de 2 segundos para buscar dados do usuário
  const userData = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nome: "João", idade: 25 });
    }, 2000);
  });

  console.log("Dados do usuário recebidos:", userData);
};

console.log("Iniciando busca de dados...");
fetchUserData();
console.log("Código continua executando enquanto espera os dados...");

// Saída esperada:
// Iniciando busca de dados...
// Código continua executando enquanto espera os dados...
// (após 2 segundos)
// Dados do usuário recebidos: { nome: "João", idade: 25 }
