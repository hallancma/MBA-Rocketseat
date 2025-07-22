import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { scheduleDays } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.querySelector("#client");
const selectedDate = document.querySelector("#date");

//Data atual para o input
const inputToday = dayjs().format("YYYY-MM-DD");

//Carrega a data atual no campo de data
selectedDate.value = inputToday;

//Define a data mínima do campo de data para hoje
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();
  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Por favor, preencha o nome do cliente.");
    }
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Por favor, selecione um horário disponível.");
    }
    // Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":");

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    //Gerar um ID
    const id = new Date().getTime();
    //Realiza o agendamento
    await scheduleNew({
      id,
      name,
      when,
    });

    //Recarrega os agendamentos do dia
    await scheduleDays();
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento", error);
  }
};
