import { scheduleFetchByDays } from "../../services/schedule-fetch-by-day.js";
import { scheduleShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.querySelector("#date");
export async function scheduleDays() {
  const date = selectedDate.value;

  // Busca na API os agendamentos do dia
  const dailySchedules = await scheduleFetchByDays({ date });

  //Exibe os agendamentos do dia
  scheduleShow({ dailySchedules });
  //Busca na API os agendamentos do dia

  // Renderiza os horários disponíveis
  hoursLoad({ date, dailySchedules });
}
