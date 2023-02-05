// import { productsSwiper2, products, mainProduct } from "./common/index.js";

// import { mainBannerSwiper, mainTopSwiper } from "./swiper/index.js";
// import { getData } from "./common/index.js";

const url = "http://localhost:3000/products";

//fetch 방법
// fetch(url)
//   .then(response => response.json())
//   .then(json => {
//     return json.forEach(item => {
//       console.log(item);
//     });
//   });

// async, await + fetch
async function init() {
  const response = await fetch(url);
  const jsonArray = await response.json();
  //데이터 배열인 jsonArray 반환
  return jsonArray;
}

init();

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
