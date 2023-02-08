// 아코디언 JS 기능 코드 시작

const storageType = document.querySelectorAll(".accordionButton");
const productList = document.querySelector(".productInput");
const productCold = document.querySelector(".cold");
const productFreeze = document.querySelector(".freeze");
const productStandard = document.querySelector(".standard");

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

const selectCount = document.querySelectorAll('input[id="select"]'); // 전체 체크박스 개수
const checked = document.querySelectorAll('input[id="select"]:checked'); // 선택된 체크박스
// const checkAll = document.querySelector('input[id="checkAll"]'); // check all 체크박스

const cartBody = document.querySelector(".cartList__body");
console.log(cartBody);
cartBody.addEventListener("click", e => {
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
  }
});
