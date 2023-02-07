
// import { plusHandler, minusHandler } from "./common/index.js";


// 아코디언 JS 기능 코드 시작

const storageType = document.querySelectorAll(".accordionButton");
const productList = document.querySelector(".productInput");
const productCold = document.querySelector(".cold");
const productFreeze = document.querySelector(".freeze");
const productStandard = document.querySelector(".standard");

// console.log(storageType);
// console.log(productList);

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


// const cartBody = document.querySelector(".cartList__body");
// console.log(cartBody);


/* cartBody.addEventListener("click", e => {
  if (e.target.tagName === "LABEL") {
    if (e.target.checked === false) {
      e.target.style.backgroundImage =
        "url('../assets/icons/isChecked=true.svg')";
      e.target.checked = true;
    } else {
      e.target.style.backgroundImage =
        "url('../assets/icons/isChecked=false.svg')";
      e.target.checked = false;
    }
  } */


const cartButton = document.querySelectorAll(".cartList__product");
const minus = document.querySelectorAll('.quantity__minus')
const result = document.querySelectorAll('.quantity__result')
const plus = document.querySelectorAll('.quantity__plus')

let resultNumber = 1;

function plusHandler() {
  resultNumber++
  result.textContent = resultNumber;
  minus.disabled = false;
  minus.classList.add('quantity__minus--change')
}

function minusHandler() {
  if (resultNumber > 1) {
    resultNumber--
    result.textContent = resultNumber;
    if (resultNumber == 1) {
      minus.classList.remove('quantity__minus--change')
    }
  } else {
    minus.classList.add('quantity__minus')
    minus.classList.remove('quantity__minus--change')
  }
}

cartButton.forEach(item => {
  item.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
  
    if(target === plus) {
      plusHandler();
    } else if(target === minus) {
      minusHandler();
    } 
  })
})
