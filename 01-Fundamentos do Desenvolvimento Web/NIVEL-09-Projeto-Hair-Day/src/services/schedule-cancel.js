import { apiConfig } from "./api-config.js";

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
    alert("Não foi possível cancelar o agendamento");
  }
}
