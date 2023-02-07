/* const id = document.getElementById('loginId')
const password = document.getElementById('loginPw')
const loginBtn = document.querySelector('.loginComplete__login')

loginBtn.addEventListener('click', () => {
	if(id.value === 'hyunzsu' && password.value === '0000') {
		location.href('main.html')
	}
	else {
		// alert('아이디, 비밀번호를 확인해주세요.')
		const openButton = document.querySelector(".loginComplete__login");
		const popUp = document.querySelector(".popUp");
		const putBtn = popUp.querySelector("#putCart");
		const closeBtn = popUp.querySelector("#closePopup");
		console.log(openButton);
		console.log(popUp, putBtn, closeBtn);

		const openModal = () => {
			popUp.classList.remove("hidden");
		};
		const closeModal = () => {
			popUp.classList.add("hidden");
		};
		const putModal = () => {
			popUp.classList.add("hidden");
		};
		putBtn.addEventListener("click", putModal);
		closeBtn.addEventListener("click", closeModal);
		openButton.addEventListener("click", openModal);
	}
}) */

const popUp = document.querySelector(".popUp");

export const openModal = () => {
	popUp.classList.remove("hidden");
};
