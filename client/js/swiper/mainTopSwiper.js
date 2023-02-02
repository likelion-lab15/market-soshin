export const mainTopSwiper = new Swiper(".mainTopSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".mainTopSwiper-button-next",
    prevEl: ".mainTopSwiper-button-prev",
  },
});
