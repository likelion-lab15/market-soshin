//메인 페이지 캐러셀 템플릿
const mainProduct = document.querySelectorAll(".products__wrapper");

getJsonData().then(datas => {
  datas.forEach(data => {
    const {id, name, description, price, salePrice, saleRatio, stock, image } = data;

    let salePrice2 = data.salePrice === 0 ? price : data.salePrice;
    let saleRatio2 = data.saleRatio * 100 !== 0 ? data.saleRatio * 100 + "%" : "";
    // testTemplate(image.thumbnail, image.alt, name, saleRatio2, salePrice2, price);
    insertLast( mainProduct, createMainSwiperTemplate(image.thumbnail, image.alt, name, saleRatio2, salePrice2, price))
  })
});

export function insertLast(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    refError('insertLast 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  }
  node.insertAdjacentHTML('beforeend', text);
}

export function createMainSwiperTemplate(thumbnail, alt, name, saleRatio, salePrice2, price) {  
  return `
    <div class="swiper-slide product">
      <a href="#" class="product__link">
        <div class="product__imgContainer">
          <img class="product__img" src="../client/assets/${thumbnail}"
            alt="${alt}"
          />
        </div>
        <div class="product__info">
          <h3 class="product__name">${name}</h3>
          <div>
            <div>
              <div>
                <span class="product__discountRate">${saleRatio}</span>
                <span class="product__discountPrice">${salePrice2}원</span>
              </div>
              <div>
                <span class="product__price">${price}원</span>
              </div>
            </div>
          </div>
        </div>
      </a>
  
      <button type="button" class="product__button">
        <img
          src="../client/assets/icons/Cart2.svg"
          alt="장바구니 이미지"
        />
      </button>
    </div>
  `;
  }

/*   export const products = data.products.map(item => {
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
            <img class="product__img" src="../client/assets/${thumbnail}"
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
            src="../client/assets/icons/Cart2.svg"
            alt="장바구니 이미지"
          />
        </button>
      </div>
      
    `;
    } */