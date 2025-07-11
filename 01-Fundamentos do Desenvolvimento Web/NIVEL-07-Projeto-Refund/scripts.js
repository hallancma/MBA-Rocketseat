//Seleciona os elementos do formulário.
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const expense = document.querySelector("#expense");
const category = document.querySelector("#category");

//Seleciona os elementos da lista
const expenseList = document.querySelector("ul");
const expensesTotal = document.querySelector("aside header h2");
const expensesQuantity = document.querySelector("aside header p span");


//Captura o evento de input para formatar o valor
amount.oninput = () => {
  //Obtém o valor atual do input e remove os caracteres não números
  let value = amount.value.replace(/\D/g, "");

  //Transformar o valor em centavos;
  value = Number(value) / 100;
  amount.value = formatCurrencyBRL(value);

  //console.log(value);
}



function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return value;
}

//Captura o evento de submit do formulário para obter os valores
form.onsubmit = (event) => {
  //Previne o comportamento padrão de recarregar a página
  event.preventDefault();

  //Cria um objeto com os detalhes na nova despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    create_at: new Date(),
  }
  //Chama a função que ira adicionar o item na lista
  expenseAdd(newExpense);
}

// Adiciona um novo item na lista
function expenseAdd(newExpense) {
  try {
    //Cria o elemento de (li) para adicionar o item na lista(ul)
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    //Cria o ícone da categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    //Cria a info da despesa
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    //Cria o nome da despesa
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    //Cria a categoria da despesa

    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;



    //Adiciona nome e categoria na div das informações da despesa
    expenseInfo.append(expenseName, expenseCategory);


    // Cria o valor da despesa
    const expanseAmount = document.createElement("span");
    expanseAmount.classList.add("expense-amount");
    expanseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`;


    // <img src="./img/remove.svg" alt="remover" class="remove-icon" />
    // Cria o elemento de remover
    const removeIcon = document.createElement("img");
    removeIcon.classList.add("remove-icon");
    removeIcon.setAttribute("src", "./img/remove.svg");
    removeIcon.setAttribute("alt", "remover");



    //Adiciona as informações no item
    expenseItem.append(expenseIcon, expenseInfo, expanseAmount, removeIcon);

    //Adiciona o item na lista
    expenseList.append(expenseItem);



    //Atualiza os totais
    updateTotals();

    //Limpa o formulário
    formClear();


  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.");
    console.log(error);
  }
}

// Atualiza os totais
function updateTotals() {
  try {
    //Recupera todos os itens (li) da lista (ul)
    const items = expenseList.children;
    //Atualiza a quantidade da lista
    expensesQuantity.textContent = `${items.length} 
    ${items.length > 1 ? "despesas" : "despesa"}`;

    //Variável para incrementar o total
    let total = 0;
    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector(".expense-amount");

      // Remove caracteres não numéricos e substitui a vírgula pelo ponto
      let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".");

      //Converte o valor para float
      value = parseFloat(value);

      //Verifica se é um número válido
      if (isNaN(value)) {
        return alert("Não foi possível calcular o total. O valor não parece ser um número");
      }

      //Incrementa o valor total;
      total += Number(value);

    }

    //Cria a span para adionar o R$ formatado
    const symbolBRL = document.createElement("small");
    symbolBRL.textContent = "R$";

    // Formata o valor e remove o R$ que será exbido pela small com um estilo customizado
    total = formatCurrencyBRL(total).toUpperCase().replace("R$", "");

    //Limpa o conteúdo do elemento
    expensesTotal.innerHTML = "";

    // Adiciona o símbolo da moeda e o valor formatado
    expensesTotal.append(symbolBRL, total);

  } catch (error) {
    console.log(error);
    alert("Não foi possível atualizar os totais.");
  }
}

// Evento que captura o clique nos itens da lista
expenseList.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-icon")) {
    // Obtém a li pai do elemento clicado
    const item = event.target.closest(".expense");
    //Remove o item da lista
    item.remove();
  }
  //Atualiza o valor total
  updateTotals();
});

function formClear() {
  //Limpa os inputs
  expense.value = "";
  category.value = "";
  amount.value = "";

  //Coloca o foco
  expense.focus();
}