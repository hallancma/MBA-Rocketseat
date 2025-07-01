
/*Imutabilidade significa que, uma vez criado, um dado(como um array ou objeto) não pode ser alterado diretamente.
Em vez de modificar o valor original, criamos uma nova cópia com as mudanças desejadas.
Isso evita efeitos colaterais e torna o código mais previsível e fácil de entender.

  Exemplos:*/

// Exemplo com array
const numeros = [1, 2, 3];
// Forma imutável: cria um novo array, não altera o original
const novosNumeros = [...numeros, 4]; // [1, 2, 3, 4]

// Exemplo com objeto
const pessoa = { nome: "Ana", idade: 25 };
// Forma imutável: cria um novo objeto, não altera o original
const novaPessoa = { ...pessoa, idade: 26 }; // { nome: "Ana", idade: 26 }


