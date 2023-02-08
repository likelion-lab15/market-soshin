export const popUp = document.querySelector(".popUp");


const productName = document.querySelectorAll(".product__name");
const productDiscountPrice = document.querySelectorAll(".product__discountPrice");
const productPrice = document.querySelectorAll(".product__price");

export function cartTemplateMaking(name, salePrice, originalPrice) {
  return `
  <div class="popUp__overlay">"</div>
  <div class="popUp__content">
    <div class="popUp__product--name">
      <span class="product__name">${name}</span>
    </div>

    <div class="popUp__product--count">
      <div>
        <span class="product__discountPrice"
          >${salePrice}</span
        >
        <span class="product__price"
          >${originalPrice}</span
        >
      </div>
      <div class="productCount">
        <div class="quantity">
          <button class="quantity__minus" disabled></button>
          <span class="quantity__result">1</span>
          <button class="quantity__plus"></button>
        </div>
      </div>
    </div>

    <div class="popUp__product--total">
      <p class="total--count">합계</p>
      <p class="total--price">
        ${salePrice}
      </p>
    </div>
    <div class="popUp__product--benefit">
      <span class="benefit--save">적립</span
      ><span class="benefit--explain">
        로그인 후, 회원할인가와 적립혜택 제공
      </span>
    </div>

    <div class="popUp__button--container">
      <button id="closePopup">취소</button>
      <button id="putCart">장바구니 담기</button>
    </div>
  </div>

`;
}

export function insertCartModal(position) {
  position.insertAdjacentHTML(
    "beforeend",
    cartTemplateMaking(
      productName.textContent,
      productDiscountPrice.textContent,
      productPrice.textContent,
    ),
  );
}
