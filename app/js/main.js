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

//=================================================================================================================
// Glider
new Glider(document.querySelector('.slider__img'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next',
    },
    scrollLock: true,
    scrollLockDelay: 100,
    resizeLock: true,
    rewind: true,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

// =================================================================================================================
// main-popup
// let order = document.querySelector('.order');
// let closeOrder = document.querySelector('.order__close');
// setTimeout(() => {
//     order.classList.add('active');
// }, 10000);
// closeOrder.addEventListener('click', function () {
//     order.classList.remove('active');
// });

// ====================================================================================================================
// fixed menu

let header = document.querySelector('.header');

function fixedHeader() {
    if (window.pageYOffset >= 100) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}
window.onscroll = function () {
    fixedHeader();
};
