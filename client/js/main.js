// import { productsSwiper2, products, mainProduct } from "./common/index.js";

// import { mainBannerSwiper, mainTopSwiper } from "./swiper/index.js";
// import { getData } from "./common/index.js";

import { getData } from './common/index.js';

getData().then(datas => {
  datas.forEach(data => {
    const {id, name, description, price, salePrice, saleRatio, stock } = data;
    console.log(id);
  })
});

/* const url = "http://localhost:3000/products";

// async, await + fetch
export async function init() {
  const response = await fetch(url);
  const jsonArray = await response.json();
  //데이터 배열인 jsonArray 반환
  // console.log(jsonArray);
  return jsonArray;
} */

// init().then(function(resolve) {
//   resolve.forEach((item) => {
//     console.log(item);
//   })
// })


//fetch 방법
// fetch(url)
//   .then(response => response.json())
//   .then(json => {
//     return json.forEach(item => {
//       console.log(item);
//     });
//   });

// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);
// xhr.send();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.state === 200) {
//     let productData = JSON.parse(xhr.responseText);
//     renderHTML(productData);
//   }
// };

// let aa = true;
// const promise = new Promise((resolve, reject) => {
//   if (aa) resolve("asd");
//   else reject("as");
// });

// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const get = url => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.send();
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.response));
//       } else {
//         reject("실패!");
//       }
//     };
//   });
// };

// get(url).then(res => {
//   return res;
// });

// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);
// xhr.send();
// xhr.onreadystatechange = () => {
//   if(xhr.readyState === 4 && xhr/state === 200) {

//   }
// }
