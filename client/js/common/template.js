export const mainProduct = document.querySelectorAll(".mainProduct");

data.products.map(item => {
  let name = item.name;
  let thumbnail = item.image.thumbnail;
  let price = item.price;
  let alt = item.image.alt;
  let salePrice2 = item.salePrice === 0 ? price : item.salePrice;
  let saleRatio = item.saleRatio * 100 !== 0 ? item.saleRatio * 100 + "%" : "";

  function templateMaking(thumbnail, alt, name, saleRatio, salePrice2, price) {
    return `
    <div class="product">
      <a href="#" class="product-click">
        <div class="product-image-container">
          <img src="/market-soshin/client/assets/${thumbnail}"
            class="product-img "
            alt="${alt}"
          />
        </div>
        <div class="product-info">
          <h3 class="product-name">${name}</h3>
          <div>
            <div class="product-price">
              <div>
                <span class="discount-rate">${saleRatio}</span>
                <span class="discount-price">${
                  salePrice2.toLocaleString("ko-KR") + " 원"
                }</span>
              </div>
              <div>
                <span class="original-price">${(price =
                  item.salePrice === 0
                    ? ""
                    : price.toLocaleString("ko-KR") + " 원")}</span>
              </div>
            </div>
          </div>
        </div>
      </a>

      <button type="button" class="productCart">
        <img
          src="/market-soshin/client/assets/icons/Cart.svg"
          class="cart-img"
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
