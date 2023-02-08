import {
  getInputValue,
  getNode,
  getNodes,
  addClass,
  removeClass,
  tiger,
} from "../lib/index.js";
import { gapIsValid } from "./common/index.js";

let URL = "http://localhost:3000/users";

const inputID = getNode("#registerId");
const inputPW = getNode("#registerPassword");
const inputPWCheck = getNode("#registerCheckPassword");
const inputName = getNode("#registerName");
const inputMail = getNode("#registerMail");
const inputNum = getNode("#registerNum");

const duplicateIDBtn = getNode("#idDuplicate");
const duplicateMailBtn = getNode("#mailDuplicate");

const submitBtn = getNode(".register__submitBtn");

// 숫자 정규표현식
const check = /^[0-9]+$/;

// id 유효성 검사
const idIsValid = () => {
  const userID = getInputValue("#registerId");

  if (gapIsValid(userID)) {
    // 6글자 미만이거나 영어나 숫자가 아니면 show 클래스를 보여주고 중복 확인 버튼을 못 누르게
    if (userID.length < 6 || !/^[a-z|A-Z|0-9|]+$/.test(userID)) {
      addClass("#idWarning", "show");
      duplicateIDBtn.disabled = true;
      return false;
    } else {
      removeClass("#idWarning", "show");
      duplicateIDBtn.disabled = false;
      return userID;
    }
  }
};

// pw 유효성 검사
const pwIsValid = () => {
  const userPW = getInputValue("#registerPassword");
  if (gapIsValid(userPW)) {
    if (userPW.length < 8) {
      addClass("#pwWarning", "show");
      return false;
    } else {
      removeClass("#pwWarning", "show");
      return userPW;
    }
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
    // 공백X 영어나 한글만
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

  if (gapIsValid(userMail)) {
    // '@', '.' 포함 여부
    if (userMail.includes("@") && userMail.includes(".")) {
      removeClass("#mailWarning", "show");
      // 포함하고 있으면 버튼 활성화
      duplicateMailBtn.disabled = false;
      return userMail;
    } else {
      addClass("#mailWarning", "show");
      // 포함하지 않으면 버튼 비활성화
      duplicateMailBtn.disabled = true;
      return false;
    }
  }
};

// 번호 유효성 검사
const numIsValid = () => {
  const userNum = getInputValue("#registerNum");

  if (gapIsValid(userNum)) {
    if (!check.test(userNum)) {
      addClass("#numWarning", "show");
      return false;
    } else {
      removeClass("#numWarning", "show");
      return userNum;
    }
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
    // 유효하지 않은 날짜는 unknown으로 반환
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

// 약관 세 개 전부 체크가 되어있을 때만 true
const checkTerms = () => {
  const terms1 = getNode("#terms1");
  const terms2 = getNode("#terms2");
  const terms4 = getNode("#terms4");

  return terms1.checked && terms2.checked && terms4.checked ? true : false;
};

// submit
const submitBtnHandler = e => {
  e.preventDefault();

  const genderValue = getInputValue('input[name="gender"]:checked');

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
    checkTerms()
  ) {
    const data = {
      // Date.now()를 활용해서 중복 없는 id값 생성
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
    location.replace("../index.html");
  }
};

inputID.addEventListener("input", idIsValid);
inputPW.addEventListener("input", pwIsValid);
inputPWCheck.addEventListener("input", pwCheck);
inputName.addEventListener("input", nameIsValid);
inputMail.addEventListener("input", mailIsValid);
inputNum.addEventListener("input", numIsValid);

submitBtn.addEventListener("click", submitBtnHandler);
