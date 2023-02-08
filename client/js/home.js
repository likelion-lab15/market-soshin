import {


  cartTemplateMaking,
  insertCartModal,
  displayItemHome,
  popUp,

} from "./common/index.js";

displayItemHome()
const openPopUp=document.querySelector(".products");
const productName = document.querySelector(".product__name");
const productDiscountPrice = document.querySelector(".product__discountPrice");
const productPrice = document.querySelector(".product__price");

cartTemplateMaking(productName, productDiscountPrice, productPrice);
insertCartModal(popUp)

function openModal() {
  popUp.classList.remove("hidden");
}

function closeModal() {
  popUp.classList.add("hidden");
}

function putModal() {
  popUp.classList.add("hidden");
}

const putBtn = popUp.querySelector("#putCart");
const closeBtn = popUp.querySelector("#closePopup");

openPopUp.addEventListener("click", openModal);
putBtn.addEventListener("click", putModal);
closeBtn.addEventListener("click", closeModal);

