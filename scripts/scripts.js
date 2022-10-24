/*----------------------Инициализация слайдера-----------------------*/
new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    сenteredSlides: true,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});