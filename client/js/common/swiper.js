export let productsSwiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".button1-next",
    prevEl: ".button1-prev",
  },
});

export let productsSwiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".button2-next",
    prevEl: ".button2-prev",
  },
});

// mainBanner
export const mainBannerSwiper = new Swiper(".mySwiper", {
  autoplay: true,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".mainBanner__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
