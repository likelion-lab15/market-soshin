/* import { attr } from '../../lib/dom/attr.js';
import { getNodes, getNode } from '../../lib/dom/getNode.js';
import { addClass, removeClass } from '../../lib/dom/css.js';


const minus = getNodes('.quantity__minus')
const result = getNodes('.quantity__result')
const plus = getNodes('.quantity__plus')


let i = 1;
export function plusHandler() {
  i++
  result.textContent = i;
  minus.disabled = false;
  minus.addClass('quantity__minus--change')
}

export function minusHandler() {
  if (i > 1) {
    i--
    result.textContent = i;
    if (i == 1) {
      arrminus.removeClass('quantity__minus--change')
    }
  } else {
    minus.addClass('quantity__minus')
    minus.removeClass('quantity__minus--change')
  }
}

plus.addEventListener('click', plusHandler)
plus.addEventListener('click', minusHandler) */

/* [].forEach.call(plus,function(plus) {
  plus.addEventListener('click', plusHandler)
}) */


/* [].forEach.call(minus,function(minus) {
  minus.addEventListener('click', minusHandler)
}); */


const cartBody = document.querySelector(".cartList__body");
console.log(cartBody);

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
