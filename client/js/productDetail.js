const popUp__epilogue = document.querySelector(".epilogue");
const openButton__epilogue = document.getElementById("open--epilogue");
const putBtn__epilogue = popUp__epilogue.querySelector("#putCart--epilogue");
const closeBtn__epilogue = popUp__epilogue.querySelector(
  "#closePopup--epilogue",
);

const openModal__epilogue = () => {
  popUp__epilogue.classList.remove("hidden");
};
const closeModal__epilogue = () => {
  popUp__epilogue.classList.add("hidden");
};
const putModal__epilogue = () => {
  popUp__epilogue.classList.add("hidden");
};

putBtn__epilogue.addEventListener("click", putModal__epilogue);
closeBtn__epilogue.addEventListener("click", closeModal__epilogue);
openButton__epilogue.addEventListener("click", openModal__epilogue);

const popUp__inquiry = document.querySelector(".inquiry");
const openButton__inquiry = document.getElementById("open--inquiry");
const putBtn__inquiry = popUp__inquiry.querySelector("#putCart--inquiry");
const closeBtn__inquiry = popUp__inquiry.querySelector("#closePopup--inquiry");

export const openModal__inquiry = () => {
  popUp__inquiry.classList.remove("hidden");
};
export const closeModal__inquiry = () => {
  popUp__inquiry.classList.add("hidden");
};
export const putModal__inquiry = () => {
  popUp__inquiry.classList.add("hidden");
};

putBtn__inquiry.addEventListener("click", putModal__inquiry);
closeBtn__inquiry.addEventListener("click", closeModal__inquiry);
openButton__inquiry.addEventListener("click", openModal__inquiry);


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
