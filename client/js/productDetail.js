import {
  openModal__epilogue,
  openModal__inquiry,
  closeModal__epilogue,
  closeModal__inquiry,
  putModal__epilogue,
  putModal__inquiry,
} from "./common/index.js";

// panel-faq-container
const faqList = document.querySelectorAll(".faqList"); // NodeList 객체
// console.log(faqList);

// panel-faq-answer
let questionAnswer = document.querySelectorAll(".questionAnswer");
// console.log(questionAnswer);

// 반복문 순회하면서 해당 FAQ제목 클릭시 콜백 처리
for (let i = 0; i < faqList.length; i++) {
  faqList[i].addEventListener("click", function () {
    // 클릭시 처리할 일
    // FAQ 제목 클릭시 -> 본문이 보이게끔 -> active 클래스 추가
    questionAnswer[i].classList.toggle("active");
  });
}
