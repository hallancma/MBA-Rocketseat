const guests = document.querySelector("ul");
// console.log(guests);

const newGuest = document.createElement("li");
newGuest.classList.add("guest");
const guestName = document.createElement("span");

const surName = document.createElement("span");


guestName.textContent = "Hallan";
surName.textContent = "Christian";

//Append adiciona apos
//prepend adicona antes do primeiro filho
// newGuest.prepend(guestName)
// newGuest.append(surName);

//É mais simples que o appent e aceita apenas um argumento
newGuest.appendChild(guestName);
console.log(newGuest);

// guests.append(newGuest);
guests.prepend(newGuest);