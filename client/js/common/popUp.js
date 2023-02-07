


const popUp = document.querySelector(".popUp");

export function openModal() {
  popUp.classList.remove("hidden");
}

export function closeModal() {
  popUp.classList.add("hidden");
}

export function putModal() {
  popUp.classList.add("hidden");
}



