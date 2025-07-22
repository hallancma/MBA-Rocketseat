import { scheduleDays } from "../schedules/load.js";
//Seleciona o campo de data
const selectedDate = document.querySelector("#date");

//Adiciona um listener para o evento de mudança
selectedDate.onchange = () => scheduleDays();
