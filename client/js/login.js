import { getNode, tiger, removeClass, addClass } from "../lib/index.js";

// json url
const URL = "http://localhost:3000/users";

const loginInputId = getNode("#loginId");
const loginInputPW = getNode("#loginPw");

const loginModal = getNode(".loginPopUp");
const loginModalClose = getNode(".loginPopUp__product--button");

const loginBtn = getNode(".loginComplete__login");

// 로그인 체크 함수
const checkLogin = async () => {
  const response = await tiger.get(URL);
  const userData = response.data;

  const loginIDVal = loginInputId.value;
  const loginPWVal = loginInputPW.value;

  const obj = userData.find(user => user.id === loginIDVal);

  if (obj) {
    if (loginPWVal === obj.password) {
      localStorage.setItem("uniqueID", obj.uniqueID);
      location.replace("../index.html");
    } else {
      removeClass(".loginPopUp", "hidden");
    }
  } else {
    removeClass(".loginPopUp", "hidden");
  }
};

const closeLoginModal = e => {
  if (e.target === e.currentTarget) {
    addClass(".loginPopUp", "hidden");
  }
};

loginModal.addEventListener("click", closeLoginModal);
loginModalClose.addEventListener("click", closeLoginModal);

loginBtn.addEventListener("click", checkLogin);
