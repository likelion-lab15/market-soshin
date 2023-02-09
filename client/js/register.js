import {
  getInputValue,
  getNode,
  getNodes,
  addClass,
  removeClass,
  tiger,
} from "../lib/index.js";
import { gapIsValid } from "./common/index.js";

// json url
let URL = "http://localhost:3000/users";

// 인풋
const inputID = getNode("#registerId");
const inputPW = getNode("#registerPassword");
const inputPWCheck = getNode("#registerCheckPassword");
const inputName = getNode("#registerName");
const inputMail = getNode("#registerMail");
const inputNum = getNode("#registerNum");
// 중복확인
const checkAvailableID = getNode("#idDuplicate");
const checkAvailableEmail = getNode("#mailDuplicate");
// 모달
const registerModal = getNode(".register__modal");
const registerModalMessage = getNode(".register__modalText");
const registerModalClose = getNode(".register__modalBtn");
// 가입 버튼
const submitBtn = getNode(".register__submitBtn");
/* 2. 중복 확인 변수 */
let AVAILABLE__ID = false;
let AVAILABLE__EMAIL = false;
/* 3. 숫자 정규표현식 */
const check = /^[0-9]+$/;

// id 유효성 검사 함수
const idIsValid = () => {
  const userID = getInputValue("#registerId");

  if (
    userID.length < 6 ||
    !/^[a-z|A-Z|0-9|]+$/.test(userID) ||
    userID.trim() == ""
  ) {
    addClass("#idWarning", "show");
    checkAvailableID.disabled = true;
    return false;
  } else if (gapIsValid(userID)) {
    removeClass("#idWarning", "show");
    checkAvailableID.disabled = false;
    return userID;
  }
};

// pw 유효성 검사
const pwIsValid = () => {
  const userPW = getInputValue("#registerPassword");

  if (userPW.length < 8 || userPW.trim() === "") {
    addClass("#pwWarning", "show");
    return false;
  } else if (gapIsValid(userPW)) {
    removeClass("#pwWarning", "show");
    return userPW;
  }
};

// pw 확인
const pwCheck = () => {
  const userPW = getInputValue("#registerPassword");
  const userPWCheck = getInputValue("#registerCheckPassword");

  if (userPW !== userPWCheck) {
    addClass("#pwCheckWarning", "show");
    return false;
  } else {
    removeClass("#pwCheckWarning", "show");
    return true;
  }
};

// 이름 유효성 검사
const nameIsValid = () => {
  const userName = getInputValue("#registerName");

  if (!gapIsValid(userName) || !/^[a-힣]{1,50}$/.test(userName)) {
    addClass("#nameWarning", "show");
    return false;
  } else {
    removeClass("#nameWarning", "show");
    return userName;
  }
};

// 이메일 유효성 검사
const mailIsValid = () => {
  const userMail = getInputValue("#registerMail");

  if (userMail.includes("@") && userMail.includes(".")) {
    removeClass("#mailWarning", "show");
    checkAvailableEmail.disabled = false;
    return userMail;
  } else if (gapIsValid(userMail)) {
    addClass("#mailWarning", "show");
    checkAvailableEmail.disabled = true;
    return false;
  }
};

// 번호 유효성 검사
const numIsValid = () => {
  const userNum = getInputValue("#registerNum");

  if (!check.test(userNum) || userNum.trim() === "") {
    addClass("#numWarning", "show");
    return false;
  } else if (gapIsValid(userNum)) {
    removeClass("#numWarning", "show");
    return userNum;
  }
};

// 생년월일
const userBirth = () => {
  const birthYear = getInputValue("#registerInputYear");
  const birthMonth = getInputValue("#registerInputMonth");
  const birthDay = getInputValue("#registerInputDay");

  if (check.test(birthYear) && check.test(birthMonth) && check.test(birthDay)) {
    return [birthYear, birthMonth, birthDay].join("");
  } else {
    return "unknown";
  }
};

// 약관동의
const agreeAll = getNode("#termsAll");
const agreeChk = getNodes("input[name=terms]");

agreeAll.addEventListener("change", e => {
  for (let i = 0; i < agreeChk.length; i++) {
    agreeChk[i].checked = e.target.checked;
  }

  return true;
});

const checkTerms = () => {
  const terms1 = getNode("#terms1");
  const terms2 = getNode("#terms2");
  const terms4 = getNode("#terms4");

  return terms1.checked && terms2.checked && terms4.checked ? true : false;
};

// 중복확인
const checkId = async () => {
  const userData = await tiger.get(URL);
  const userID = userData.data.find(user => user.id === inputID.value);

  if (userID) {
    addClass(".register__modal", "show");
    registerModalMessage.innerText = "이미 사용 중인 아이디입니다.";
    AVAILABLE__ID = false;
  } else {
    addClass(".register__modal", "show");
    registerModalMessage.innerText = "사용 가능한 아이디입니다.";
    AVAILABLE__ID = true;
  }
};
const checkEmail = async () => {
  const userData = await tiger.get(URL);

  const userEmail = userData.data.find(user => user.email === inputMail.value);

  if (userEmail) {
    addClass(".register__modal", "show");
    registerModalMessage.innerText = "이미 사용 중인 이메일입니다.";
    AVAILABLE__EMAIL = false;
  } else {
    addClass(".register__modal", "show");
    registerModalMessage.innerText = "사용 가능한 이메일입니다.";
    AVAILABLE__EMAIL = true;
  }
};

// submit 회원가입 버튼을 클릭했을 때 일어나는 이벤트 함수
const submitBtnHandler = e => {
  e.preventDefault();

  const genderValue = getInputValue('input[name="gender"]:checked');

  if (AVAILABLE__ID === false) {
    addClass(".register__modal", "show");
    registerModalMessage.innerText = "ID 중복 확인을 해주세요!";
  }

  if (AVAILABLE__EMAIL === false) {
    addClass(".register__modal", "show");
    registerModalMessage.innerText = "Email 중복 확인을 해주세요!";
  }

  if (!numIsValid()) {
    inputNum.focus();
    addClass("#numWarning", "show");
  }

  if (!mailIsValid()) {
    inputMail.focus();
    addClass("#mailWarning", "show");
  }

  if (!nameIsValid()) {
    inputName.focus();
    addClass("#nameWarning", "show");
  }

  if (!pwCheck()) {
    inputPWCheck.focus();
    addClass("#pwCheckWarning", "show");
  }

  if (!pwIsValid()) {
    inputPW.focus();
    addClass("#pwWarning", "show");
  }

  if (!idIsValid()) {
    inputID.focus();
    addClass("#idWarning", "show");
  }

  if (
    numIsValid() &&
    mailIsValid() &&
    nameIsValid() &&
    pwCheck() &&
    pwIsValid() &&
    idIsValid() &&
    AVAILABLE__ID === true &&
    AVAILABLE__EMAIL === true &&
    !checkTerms()
  ) {
    addClass(".register__modal", "show");
    registerModalMessage.innerText = "필수 이용 약관에 동의해주세요.";
  }

  if (
    numIsValid() &&
    mailIsValid() &&
    nameIsValid() &&
    pwCheck() &&
    pwIsValid() &&
    idIsValid() &&
    checkTerms() &&
    AVAILABLE__ID === true &&
    AVAILABLE__EMAIL === true
  ) {
    const data = {
      uniqueID: Date.now(),
      id: idIsValid(),
      name: nameIsValid(),
      password: pwIsValid(),
      email: mailIsValid(),
      phone: numIsValid(),
      gender: genderValue,
      birth: userBirth(),
    };

    tiger.post(URL, data);
    location.replace("../pages/login.html");
  }
};

const closeRegiModal = e => {
  if (e.target === e.currentTarget) {
    removeClass(".register__modal", "show");
  }
};

inputID.addEventListener("input", idIsValid);
inputPW.addEventListener("input", pwIsValid);
inputPWCheck.addEventListener("input", pwCheck);
inputName.addEventListener("input", nameIsValid);
inputMail.addEventListener("input", mailIsValid);
inputNum.addEventListener("input", numIsValid);

registerModal.addEventListener("click", closeRegiModal);
registerModalClose.addEventListener("click", closeRegiModal);

checkAvailableID.addEventListener("click", checkId);
checkAvailableEmail.addEventListener("click", checkEmail);

submitBtn.addEventListener("click", submitBtnHandler);
