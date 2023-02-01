export const mainProduct = document.querySelectorAll(".products__wrapper");

export const products = data.products.map(item => {
  let name = item.name;
  let thumbnail = item.image.thumbnail;
  let price = item.price;
  let alt = item.image.alt;
  let salePrice2 = item.salePrice === 0 ? price : item.salePrice;
  let saleRatio = item.saleRatio * 100 !== 0 ? item.saleRatio * 100 + "%" : "";

  function templateMaking(thumbnail, alt, name, saleRatio, salePrice2, price) {
    return `
    <div class="swiper-slide product">
      <a href="#" class="product__link">
        <div class="product__imgContainer">
          <img class="product__img" src="/market-soshin/client/assets/${thumbnail}"
            alt="${alt}"
          />
        </div>
        <div class="product__info">
          <h3 class="product__name">${name}</h3>
          <div>
            <div>
              <div>
                <span class="product__discountRate">${saleRatio}</span>
                <span class="product__discountPrice">${
                  salePrice2.toLocaleString("ko-KR") + " 원"
                }</span>
              </div>
              <div>
                <span class="product__price">${(price =
                  item.salePrice === 0
                    ? ""
                    : price.toLocaleString("ko-KR") + " 원")}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
  
      <button type="button" class="product__button">
        <img
          src="/market-soshin/client/assets/icons/Cart2.svg"
          alt="장바구니 이미지"
        />
      </button>
    </div>
    
  `;
  }

  function insert(load, num) {
    load[num].insertAdjacentHTML(
      "beforeend",
      templateMaking(thumbnail, alt, name, saleRatio, salePrice2, price),
    );
  }

  for (let i = 0; i < mainProduct.length; i++) insert(mainProduct, i);
});
