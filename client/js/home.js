import {

  openModal,
  closeModal,
  putModal,

  cartTemplateMaking,
  insertCartModal,
  displayItemHome,
  popUp,
  addCart
} from "./common/index.js";

displayItemHome()

const productName = document.querySelector(".product__name");
const productDiscountPrice = document.querySelector(".product__discountPrice");
const productPrice = document.querySelector(".product__price");
// const popUp = document.querySelector(".popUp");

cartTemplateMaking(productName, productDiscountPrice, productPrice);
insertCartModal(popUp)


const putBtn = popUp.querySelector("#putCart");
const closeBtn = popUp.querySelector("#closePopup");
const openButton = document.querySelector("#open");

console.log(openButton)
/* openButton.forEach(cartIcon => {
  cartIcon.addEventListener("click", openModal);
}); */


openButton.addEventListener("click", openModal);
putBtn.addEventListener("click", putModal);
closeBtn.addEventListener("click", closeModal);

