
import { closeModal, openModal } from "./common/login.js";

const id = document.getElementById('loginId')
const password = document.getElementById('loginPw')
const loginBtn = document.querySelector('.loginComplete__login')
const checkBtn = document.querySelector('.popUp__product--button')

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
	if(id.value === 'hyunzsu' && password.value === '0000') {
    location.replace('../index.html')
	}
	else {
    const popUp = document.querySelector(".popUp");
    console.log(popUp);
    openModal();
	}
})

checkBtn.addEventListener('click', closeModal)
