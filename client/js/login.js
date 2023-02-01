const id = document.getElementById('loginId')
const password = document.getElementById('loginPw')
const loginBtn = document.querySelector('.loginComplete__login')

loginBtn.addEventListener('click', () => {
	if(id.value === 'hyunzsu' && password.value === '0000') {
		location.href('main.html')
    // console.log('cool');
	}
	else {
		alert('아이디, 비밀번호를 확인해주세요.')
    // console.log('no');
	}
})