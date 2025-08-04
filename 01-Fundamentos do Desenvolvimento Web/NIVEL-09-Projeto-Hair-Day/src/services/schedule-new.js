import { apiConfig } from "./api-config";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "./localStorage-config.js";
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
    // Save to localStorage
    const data = getLocalStorageData();
    data.push({ id, name, when });
    setLocalStorageData(data);
    alert("Não foi possível realizar o agendamento");
  }
}
