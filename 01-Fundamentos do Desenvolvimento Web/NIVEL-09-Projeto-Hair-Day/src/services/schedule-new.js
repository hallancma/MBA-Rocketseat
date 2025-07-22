import { apiConfig } from "./api-config";
export async function scheduleNew({ id, name, when }) {
  try {
    //Fazendo a requisição para agendar
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        when,
      }),
    });
    //Exibe uma mensagem de sucesso
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.error("Erro ao agendar:", error);
    alert("Não foi possível realizar o agendamento");
  }
}
