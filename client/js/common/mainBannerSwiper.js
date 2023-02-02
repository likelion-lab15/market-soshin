export const mainBannerSwiper = new Swiper(".mainBannerSwiper", {
  autoplay: true,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".mainBannerSwiper__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".mainBannerSwiper__button--next",
    prevEl: ".mainBannerSwiper__button--prev",
  },
});
