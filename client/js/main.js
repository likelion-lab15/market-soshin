// 아코디언 JS 기능 코드 시작

const storageType = document.querySelectorAll(".accordionButton");
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

// 아코디언 JS 기능 코드 끝

// 전체선택 JS 구현 시작

//

const selectCount = document.querySelectorAll('input[id="select"]'); // 전체 체크박스 개수
const checked = document.querySelectorAll('input[id="select"]:checked'); // 선택된 체크박스
// const checkAll = document.querySelector('input[id="checkAll"]'); // check all 체크박스

// console.log(selectCount);
// console.log(checked);
// console.log(selectCount.length);

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

  /*   if (e.target.tagName === "LABEL" && e.target.checked === false) {
    console.log(e.target.checked);
    e.target.style.backgroundImage =
      "url('../assets/icons/isChecked=true.svg')";
    e.target.checked = true;
  } else if (e.target.tagName === "LABEL" && e.target.checked === true) {
    console.log(e.target.checked);
    e.target.style.backgroundImage =
      "url('../assets/icons/isChecked=false.svg')";
    e.target.checked = false;
  } */
});

// cartBody.addEventListener("click", e => {
//   if (e.target.checked === true) {
//     e.target.style.backgroundImage =
//       "url('../assets/icons/isChecked=false.svg')";
//     e.target.checked = false;
//     console.log(e.target.checked === true);
//   }
// });

// list.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     console.log(e.target.innerText);
//   }

// console.log(checkAll);

// for (let i = 0; i < selectCount.length; i++) {
//   console.log(selectCount[i]);
//   selectCount[i].addEventListener("click", function () {
//     const label = this.closest("label");
//     if (this.checked === true) {
//       console.log(label);
//       console.log(label.style.backgroundImage);
//       label.style.backgroundImage = "url('../assets/icons/isChecked=true.svg')";
//     } else if (this.checked === false) {
//       label.style.backgroundImage =
//         "url('../assets/icons/isChecked=false.svg')";
//     }

//     // console.log(selectCount[i].checked === true);
//     //   item[i].checked = true;
//     //   console.log(checked);
//     //   // checked.forEach(checked => {
//     //   //   console.log(checked);
//     //   // });
//   });
// }

// selectCount.addEventListener("click", function () {
//   console.log("click");
//   if (selectCount.length === checked.length) {
//     checkAll.checked = true;
//   } else {
//     checkAll.checked = false;
//   }
// });

// function selectAll(selectAll) {
//   const selectCount = document.getElementsByName("select");
//   selectCount.forEach(checkbox => {
//     checkbox.checked = selectAll.checked;
//   });
// }
