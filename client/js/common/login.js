

const id = document.getElementById('loginId')
const password = document.getElementById('loginPw')
const loginBtn = document.querySelector('.loginComplete__login')
const checkBtn = document.querySelector('.popUp__product--button')
const popUp = document.querySelector(".popUp");

// 로컬스토리지 테스트
const user = { id: "hjs", password: '0000'} // 로컬스토리지 넣을 임의의 값

localStorage.setItem("H", JSON.stringify(user)) 
console.log(localStorage.getItem("H"));
let K = localStorage.getItem("H")

console.log(JSON.parse(K));
let Y = JSON.parse(K)
console.log(Y.id);

export const openModal = () => {
	popUp.classList.remove("hidden");
};

export const closeModal = () => {
  popUp.classList.add("hidden");
};


loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
	if(id.value === Y.id && password.value === Y.password) { // 로컬스토리지 값이 맞으면 로그인 성공
    location.replace('../hello.html')
	}
	else {
    openModal();
	}
})

checkBtn.addEventListener('click', closeModal)
