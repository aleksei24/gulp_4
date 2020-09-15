// ================================================================================================================
// burger js
const burger = document.querySelector('.header__burger');
const list = document.querySelector('.menu');
const bodyLock = document.querySelector('body');
burger.addEventListener('click', toggleMenu);
function toggleMenu() {
    list.classList.toggle('active');
    burger.classList.toggle('active');
    bodyLock.classList.toggle('locked');
}
// ================================================================================================================
// dropdown menu javascript
let mobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|Padi| iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            mobile.Android() ||
            mobile.iOS() ||
            mobile.Opera() ||
            mobile.Windows()
        );
    },
};
const body = document.querySelector('body');
if (mobile.any()) {
    body.classList.add('touch');
    const arrow = document.querySelectorAll('.arrow');
    for (let i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let underground = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];
        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            underground.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
} else {
    body.classList.add('mouse');
}
//=================================================================================================================
// slider
new Glider(document.querySelector('.slider__img'), {
    slidesToShow: 1,
    draggable: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next',
    },
});

// =================================================================================================================
// main-popup
// setTimeout(() => {
//     $('.order').addClass('active');
// }, 10000);
// $('.order__close').click(function () {
//     $('.order').removeClass('active');
// });

// ====================================================================================================================
// fixed menu
// $(window).scroll(function () {
//     if ($(window).scrollTop() >= 200) {
//         $('.header').addClass('header_fixed');
//     } else {
//         $('.header').removeClass('header_fixed');
//     }
// });
