const popUp = document.querySelector(".popUp");
const putBtn = popUp.querySelector("#putCart");
const closeBtn = popUp.querySelector("#closePopup");
const openButton = document.querySelectorAll("#open");

export function openModal() {
  popUp.classList.remove("hidden");
}

export function closeModal() {
  popUp.classList.add("hidden");
}

export function putModal() {
  popUp.classList.add("hidden");
}

openButton.forEach(cartIcon => {
  cartIcon.addEventListener("click", openModal);
});

putBtn.addEventListener("click", putModal);
closeBtn.addEventListener("click", closeModal);
