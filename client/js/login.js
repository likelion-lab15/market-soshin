import { getNode, tiger, removeClass } from "../lib/index.js";

const loginInputId = getNode("#loginId");
const loginInputPW = getNode("#loginPw");

const URL = "http://localhost:3000/users";

const loginBtn = getNode(".loginComplete__login");

const checkLogin = async () => {
  const response = await tiger.get(URL);
  const userData = response.data;

  const loginIDVal = loginInputId.value;
  const loginPWVal = loginInputPW.value;

  const obj = userData.find(user => user.id === loginIDVal);

  if (obj) {
    if (loginPWVal === obj.password) {
      // 로그인 성공
      localStorage.setItem("uniqueID", obj.uniqueID);
      location.replace("../index.html");
    } else {
      removeClass(".loginPopUp", "hidden");
    }
  } else {
    removeClass(".loginPopUp", "hidden");
  }
};

loginBtn.addEventListener("click", checkLogin);
