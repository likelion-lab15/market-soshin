// 아코디언 JS 기능 코드 시작

const storageType = document.querySelectorAll(".accordionButton");
const productList = document.querySelector(".productInput");
const productCold = document.querySelector(".cold");
const productFreeze = document.querySelector(".freeze");
const productStandard = document.querySelector(".standard");

console.log(storageType);
console.log(productList);

storageType.forEach(function (storage) {
  storage.addEventListener("click", function () {
    console.log("click");
    storage.classList.toggle("active");
    if (storage.classList.contains("coldButton")) {
      productCold.classList.toggle("active");
    } else if (storage.classList.contains("freezeButton")) {
      productFreeze.classList.toggle("active");
    } else if (storage.classList.contains("standardButton")) {
      productStandard.classList.toggle("active");
    }
  });
});

// 아코디언 JS 기능 코드 끝

/*     productList.forEach(item => {
      if (item.classList.contains("cold")) {
        console.log("1");
        productCold.classList.toggle("active");
      } else if (item.classList.contains("freeze")) {
        console.log("2");
        productFreeze.classList.toggle("active");
      } else {
        console.log("3");
        productStandard.classList.toggle("active");
      } */

// if (storage.classList.contains("active")) {
//   productList.forEach(item => {
//     item.classList.toggle("active");
//   });

/* if (e.target === productCold) {
  productCold.classList.toggle("active");
}
if (e.target === productFreeze) {
  productFreeze.classList.toggle("active");
}
if (e.target === productStandard) {
  productStandard.classList.toggle("active"); */
