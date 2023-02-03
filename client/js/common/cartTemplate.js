export const addCart = document.querySelector(".popUp");

const popUp = document.querySelector(".popUp");
const productName = document.querySelector(".product__name");
const productDiscountPrice = document.querySelector(".product__discountPrice");
const productPrice = document.querySelector(".product__price");
// console.log(productName.textContent);
// console.log(productDiscountPrice.textContent);
// console.log(productPrice.textContent);

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
      <div>수량설정버튼</div>
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
