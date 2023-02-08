const popUp__epilogue = document.querySelector(".epilogue");
const openButton__epilogue = document.getElementById("open--epilogue");
const putBtn__epilogue = popUp__epilogue.querySelector("#putCart--epilogue");
const closeBtn__epilogue = popUp__epilogue.querySelector(
  "#closePopup--epilogue",
);

export const openModal__epilogue = () => {
  popUp__epilogue.classList.remove("hidden");
};
export const closeModal__epilogue = () => {
  popUp__epilogue.classList.add("hidden");
};
export const putModal__epilogue = () => {
  popUp__epilogue.classList.add("hidden");
};

putBtn__epilogue.addEventListener("click", putModal__epilogue);
closeBtn__epilogue.addEventListener("click", closeModal__epilogue);
openButton__epilogue.addEventListener("click", openModal__epilogue);

const popUp__inquiry = document.querySelector(".inquiry");
const openButton__inquiry = document.getElementById("open--inquiry");
const putBtn__inquiry = popUp__inquiry.querySelector("#putCart--inquiry");
const closeBtn__inquiry = popUp__inquiry.querySelector("#closePopup--inquiry");

export const openModal__inquiry = () => {
  popUp__inquiry.classList.remove("hidden");
};
export const closeModal__inquiry = () => {
  popUp__inquiry.classList.add("hidden");
};
export const putModal__inquiry = () => {
  popUp__inquiry.classList.add("hidden");
};

putBtn__inquiry.addEventListener("click", putModal__inquiry);
closeBtn__inquiry.addEventListener("click", closeModal__inquiry);
openButton__inquiry.addEventListener("click", openModal__inquiry);
