// Exemplos de Template Literals em JavaScript

// Template Literal básico
const nome = "Maria";
const idade = 25;
const profissao = "Desenvolvedora";

// Exemplo 1: String simples com template literal
const mensagem = `Olá, meu nome é ${nome}`;
console.log(mensagem);

// Exemplo 2: String com múltiplas variáveis
const apresentacao = `Me chamo ${nome}, tenho ${idade} anos e trabalho como ${profissao}`;
console.log(apresentacao);

// Exemplo 3: Expressões matemáticas
const preco = 29.99;
const quantidade = 3;
const total = `O valor total é R$ ${preco * quantidade}`;
console.log(total);

// Exemplo 4: String com múltiplas linhas
const carta = `
    Prezado(a) ${nome},
    
    Espero que esteja bem.
    Gostaria de confirmar sua presença no evento.
    
    Atenciosamente,
    Equipe de Organização
`;
console.log(carta);

// Exemplo 5: Template literal com operador ternário
const status = true;
const mensagemStatus = `O sistema está ${status ? 'online' : 'offline'}`;
console.log(mensagemStatus);

// Exemplo 6: Template literal com função
const calcularIdade = (anoNascimento) => {
  return 2024 - anoNascimento;
};

const anoNascimento = 1995;
const idadeCalculada = `Sua idade é ${calcularIdade(anoNascimento)} anos`;
console.log(idadeCalculada);
