import { apiConfig } from "./api-config.js";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "./localStorage-config.js";
export async function scheduleCancel({ id }) {
  try {
    // Fazendo a requisição para cancelar o agendamento
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Exibe uma mensagem de sucesso
    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.error("Erro ao cancelar agendamento:", error);
    let data = getLocalStorageData();
    data = data.filter((schedule) => schedule.id !== id);
    setLocalStorageData(data);
    alert("Não foi possível cancelar o agendamento");
  }
}
