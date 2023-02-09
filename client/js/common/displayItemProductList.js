import { getJsonData } from './getJsonData.js';

//제품리스트 컨테이너
const productListItemWrapper = document.querySelector('.productList__itemWrapper');

//제품리스트 동적으로 추가하기
export const displayItemProductList = () => getJsonData().then(datas => {
        datas.map(data => {
            let name = data.name;
            let alt = data.image.alt;
            let view = data.image.view;
            let originalPrice  = data.price;
            let salePercentage = data.saleRatio * 100;
            let discountPrice = data.salePrice;

            function createItemProductListTemplate(name, alt, saleRatio, salePrice, originalPrice) {
                return `
                <a class="productListItem" href="./productDetail.html">
                    <div class="productListItem__imgWrapper">
                        <img class="productListItem__img" src="../assets/${view}" alt="${alt}" />
                    </div>
                    <div class="productListItem__metaWrapper">
                    <span class="productListItem__delivery">샛별배송</span>
                    <h3 class="productListItem__name">${name}</h3>
                    <div class="productListItem__priceWrapper">
                        <div class="price__priceWrapper">
                            <span class="productListItem__discount">${saleRatio ? saleRatio + "%" : ''}</span>
                            <span class="productListItem__price">${saleRatio ? salePrice + " 원" : originalPrice + ' 원'}</span>
                        </div>
                        <span class="productListItem__originalPrice">${saleRatio ? originalPrice + ' 원' : ''}</span>
                        <p class="productListItem__info">유명산지에서 전하는 제철 딸기</p>
                        </div>
                        <div class="labels">
                            <span class="productListItem__label">Karly Only</span>
                            <span class="productListItem__label">한정수량</span>
                        </div>
                    </div>

                
                    <button class="productListItem__button">
                    <svg class="productListItem__icon--cart" width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4897 4.29L19.3197 13.52H6.89975L4.73975 4.29H21.4897Z" stroke="white" stroke-width="1.4" stroke-linecap="square" stroke-linejoin="round"/>
                        <path d="M17.3797 19.94C18.3186 19.94 19.0797 19.1789 19.0797 18.24C19.0797 17.3011 18.3186 16.54 17.3797 16.54C16.4408 16.54 15.6797 17.3011 15.6797 18.24C15.6797 19.1789 16.4408 19.94 17.3797 19.94Z" stroke="white" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/>
                        <path d="M8.8499 19.94C9.78879 19.94 10.5499 19.1789 10.5499 18.24C10.5499 17.3011 9.78879 16.54 8.8499 16.54C7.91102 16.54 7.1499 17.3011 7.1499 18.24C7.1499 19.1789 7.91102 19.94 8.8499 19.94Z" stroke="white" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/>
                        <path d="M1.02979 1.38H4.04979L5.45978 7.36" stroke="white" stroke-width="1.4" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
                    </button>
                </a>
                `;
            }

            function insertItem(node, item) {
                node.insertAdjacentHTML('beforeend', item);
            }

            insertItem(productListItemWrapper, createItemProductListTemplate(name, alt, salePercentage, discountPrice, originalPrice));

            const originalP = document.querySelectorAll('.productListItem__originalPrice');        
            originalP.forEach((item) => {
                if(item.textContent === '') {
                    item.classList.add('productListItem--hidden');
                }
            })
        })
    })