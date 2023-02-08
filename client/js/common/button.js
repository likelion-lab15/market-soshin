const cartButton = document.querySelectorAll(".cartList__product");
const minus = document.querySelectorAll(".quantity__minus");
const result = document.querySelectorAll(".quantity__result");
const plus = document.querySelectorAll(".quantity__plus");

let resultNumberArr = [];
// let resultNumber = 1;

export function plusHandler(num) {
  resultNumberArr[num]++;
  result[num].textContent = resultNumberArr[num];
  minus[num].disabled = false;
  minus[num].classList.add("quantity__minus--change");
}

export function minusHandler(num) {
  if (resultNumberArr[num] > 1) {
    resultNumberArr[num]--;
    result[num].textContent = resultNumberArr[num];
    if (resultNumberArr[num] == 1) {
      minus[num].classList.remove("quantity__minus--change");
    }
  } else {
    minus[num].classList.add("quantity__minus");
    minus[num].classList.remove("quantity__minus--change");
  }
}

for (let i = 0; i < cartButton.length; i++) {
  resultNumberArr.push(0);
  cartButton[i].addEventListener("click", e => {
    // console.log(resultNumberArr);
    let target = e.target;
    if (target === plus[i]) {
      plusHandler(i);
    } else if (target === minus[i]) {
      minusHandler(i);
    }
  });
}
