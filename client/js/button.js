import { attr } from '../lib/dom/attr.js';
import { getNode } from '../lib/dom/getNode.js';
import { css } from '../lib/dom/css.js';


const minus = getNode('.quantity__minus')
const result = getNode('.quantity__result')
const plus = getNode('.quantity__plus')

let i = 1;
function plusHandler() {
  i++
  result.textContent = i;
  minus.disabled = false;
  minus.classList.add('quantity__minus--change')
}

function minusHandler() {
  if (i > 0) {
    i--
    result.textContent = i;
  } else {
    // alert('금지')
  }
}

plus.addEventListener('click', plusHandler);
minus.addEventListener('click', minusHandler)
