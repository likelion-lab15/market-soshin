export const mainBottomSwiper = new Swiper(".mainBottomSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".mainBottomSwiper-button-next",
      prevEl: ".mainBottomSwiper-button-prev",
    },
  });