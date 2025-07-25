import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.querySelector("#hours");

export function hoursLoad({ date, dailySchedules }) {
  //Limpa a lista de horários
  hours.innerHTML = "";

  //Obtém os horários indisponíveis
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  // Carrega os horários disponíveis
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na data e verificar se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;
    return {
      hour,
      available,
    };
  });

  //Renderiza os horários no HTML
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;
    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }
    hours.appendChild(li);
  });
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;
  hours.appendChild(header);
}
