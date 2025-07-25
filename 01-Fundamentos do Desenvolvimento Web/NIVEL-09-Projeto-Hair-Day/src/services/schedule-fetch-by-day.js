import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDays({ date }) {
  try {
    //Fazendo a requisição para buscar os agendamentos
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    //convertendo a resposta para JSON
    const data = await response.json();
    //Filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );
    return dailySchedules;
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    alert("Não foi possível buscar os agendamentos");
  }
}
