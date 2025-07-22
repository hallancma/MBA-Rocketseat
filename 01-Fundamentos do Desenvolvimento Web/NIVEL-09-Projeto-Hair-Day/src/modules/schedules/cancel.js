import { scheduleDays } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      //Obtem a li associada ao ícone de cancelamento
      const item = event.target.closest("li");
      const { id } = item.dataset;
      if (id) {
        //Confirmação de cancelamento
        const confirmCancel = confirm(
          "Você tem certeza que deseja cancelar este agendamento?"
        );
        if (confirmCancel) {
          //Chama a função para cancelar o agendamento
          await scheduleCancel({ id });
          scheduleDays();
        }
      }
    }
  });
});
