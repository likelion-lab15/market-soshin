import {
  productsSwiper1,
  productsSwiper2,
  products,
  mainProduct,
  mainBannerSwiper,
  openModal,
  closeModal,
  putModal,
  addCart,
  cartTemplateMaking,
  insertCartModal,
} from "./common/index.js";

const productName = document.querySelector(".product__name");
const productDiscountPrice = document.querySelector(".product__discountPrice");
const productPrice = document.querySelector(".product__price");
const popUp = document.querySelector(".popUp");

cartTemplateMaking(productName, productDiscountPrice, productPrice);

insertCartModal(popUp);

const putBtn = popUp.querySelector("#putCart");
const closeBtn = popUp.querySelector("#closePopup");
const openButton = document.querySelectorAll("#open");

openButton.forEach(cartIcon => {
  cartIcon.addEventListener("click", openModal);
});

putBtn.addEventListener("click", putModal);
closeBtn.addEventListener("click", closeModal);
