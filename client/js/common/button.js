import { attr } from '../../lib/dom/attr.js';
import { getNodes, getNode } from '../../lib/dom/getNode.js';
import { addClass, removeClass } from '../../lib/dom/css.js';


const minus = getNodes('.quantity__minus')
Object.entries(minus);

const result = getNodes('.quantity__result')
Object.entries(result);

const plus = getNodes('.quantity__plus')
Object.entries(plus);

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

// [].forEach.call(plus.addEventListener('click', plusHandler));
[].forEach.call(plus,function(plus) {
  plus.addEventListener('click', plusHandler)
})

console.log(minus);

console.log(typeof minus);

[].forEach.call(minus,function(minus) {
  minus.addEventListener('click', minusHandler)
});

[].forEach.call(plus,function(plus) {
  plus.addEventListener('click', plusHandler)
});


// [].forEach.call(minus.addEventListener('click', minusHandler))
