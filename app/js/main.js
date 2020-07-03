// burger menu
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('locked');
    });
});
// slider
$('.slider__img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    fade: true,
    asNavFor: '.slider__row',
    responsive: [
        {
            breakpoint: 376,
            settings: {
                autoplay: true,
                autoplaySpeed: 2500,
                arrows: false,
            },
        },
    ],
});
$('.slider__row').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider__img',
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
});
