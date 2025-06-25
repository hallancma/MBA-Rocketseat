/**
 * O que são pacotes no JavaScript?
 *
 * Pacotes (ou "packages") são coleções de arquivos e funcionalidades reutilizáveis que podem ser facilmente compartilhadas e integradas em projetos JavaScript.
 * Eles ajudam a evitar a reinvenção da roda, facilitando o uso de códigos prontos para resolver problemas comuns, como manipulação de datas, requisições HTTP, estilização, entre outros.
 *
 * Os pacotes geralmente são gerenciados por um gerenciador de pacotes, como o npm (Node Package Manager) ou yarn.
 *
 * Exemplo de pacotes populares no JavaScript:
 * - lodash: utilitários para manipulação de arrays, objetos, strings, etc.
 * - axios: cliente HTTP para fazer requisições a APIs.
 * - moment: manipulação e formatação de datas.
 * - express: framework para criar servidores web com Node.js.
 * - react: biblioteca para construção de interfaces de usuário.
 *
 * Como instalar e usar um pacote:
 * Suponha que você queira instalar o pacote 'axios' para fazer requisições HTTP.
 *
 * 1. Instale o pacote usando o npm:
 *    npm install axios
 *
 * 2. Importe e utilize no seu código:
 */

// Exemplo de uso do pacote axios para fazer uma requisição HTTP

// Importando o pacote axios
const axios = require('axios');

// Fazendo uma requisição GET para uma API pública
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    console.log('Dados recebidos:', response.data);
  })
  .catch((error) => {
    console.log('Erro ao buscar dados:', error);
  });

/**
 * Resumindo:
 * - Pacotes facilitam o desenvolvimento, trazendo soluções prontas.
 * - São instalados via npm ou yarn.
 * - Podem ser utilizados tanto no backend (Node.js) quanto no frontend (React, Vue, etc).
 */
