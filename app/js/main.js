// ================================================================================================================
// burger js
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const bodyLock = document.querySelector('body');
burger.addEventListener('click', toggleMenu);
function toggleMenu() {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    bodyLock.classList.toggle('locked');
}

//=================================================================================================================
// Swiper
import Swiper from './node_modules/swiper/swiper-bundle.min';
// import 'swiper/swiper-bundle.css';
const swiper = new Swiper();

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

// =====================================================================================================================
// tabs JS
const container = document.querySelector('.tabs');
const controls = [].slice.call(document.querySelectorAll('.control'));

let setTab = function () {
    let num = controls.indexOf(this);
    container.style.left = `${-num * 100}%`;

    for (let control of controls) {
        control.classList.remove('active');
    }
    this.classList.add('active');
};

for (let control of controls) {
    control.addEventListener('click', setTab);
}
// ===========================================================================================================
// upTo
let toTop = document.querySelector('.toTop');

window.onscroll = function () {
    scrollFunction();
    fixedHeader();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
    ) {
        toTop.classList.add('show');
    } else {
        toTop.classList.remove('show');
    }
}

toTop.addEventListener('click', onTheTop);

function onTheTop() {
    let position =
        document.body.scrollTop !== 0 ||
        document.documentElement.scrollTop !== 0;
    if (position) {
        window.scrollBy(0, -30);
        requestAnimationFrame(onTheTop);
    }
}
// in window.scrollBy(0, -30), changing a second parameter(-30) affects the speed of scrolling
// less than -30 means faster speed
// greater than -30 means slower speed
// a second parameter must be negative, otherwise it won`t work

// ==========================================================================================================
// accordion
const accordion = document.querySelector('.accordion');
const list = document.querySelectorAll('.accordion__item');
const title = document.querySelectorAll('.accordion__title');

function toggleAccordion() {
    let thisItem = this.parentNode;
    list.forEach((item) => {
        if (thisItem == item) {
            thisItem.classList.toggle('active');
            return;
        }
        item.classList.remove('active');
    });
}

title.forEach((open) => {
    open.addEventListener('click', toggleAccordion);
});

// ============================================================================================================
// dropdown with javascript
let dropdown = document.querySelectorAll('.dropdown');
let dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach((element) => {
    let button = element.querySelector('a[data-toggle="dropdown"]');
    let menu = element.querySelector('.dropdown-menu');
    let arrow = element.querySelector('.dropdown-arrow');
    button.addEventListener('click', function (event) {
        if (!menu.hasClass('drop-js-show')) {
            menu.classList.add('drop-js-show');
            menu.classList.remove('drop-js-hide');
            arrow.classList.add('drop-js-open');
            arrow.classList.remove('drop-js-close');
            event.preventDefault();
        } else {
            menu.classList.remove('drop-js-show');
            menu.classList.add('drop-js-hide');
            arrow.classList.remove('drop-js-open');
            arrow.classList.add('drop-js-close');
            event.preventDefault();
        }
    });
});
Element.prototype.hasClass = function (className) {
    return (
        this.className &&
        new RegExp('(^|\\s)' + className + '(\\s|$)').test(this.className)
    );
};

// ================================================================================================================
// custom-select
// for only one custom-select element unwrap the code out of block.forEach
const customSelectBlock = document.querySelectorAll('.cust-select');
customSelectBlock.forEach(function (everyCustomSelect) {
    const customSelectButton = everyCustomSelect.querySelector(
        '.cust-select__btn'
    );
    const customSelectList = everyCustomSelect.querySelector(
        '.cust-select__list'
    );
    const customSelectItem = customSelectList.querySelectorAll(
        '.cust-select__item'
    );
    const customSelectInput = everyCustomSelect.querySelector(
        '.cust-select__input_hidden'
    );

    customSelectButton.addEventListener('click', function () {
        customSelectList.classList.toggle('dropdown__list_visible');
        this.classList.add('cust-select-active');
    });
    customSelectItem.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            customSelectButton.innerText = this.innerText;
            customSelectButton.focus();
            customSelectInput.value = this.dataset.value;
            customSelectList.classList.remove('dropdown__list_visible');
        });
    });
    document.addEventListener('click', function (e) {
        if (e.target !== customSelectButton) {
            customSelectButton.classList.remove('cust-select-active');
            customSelectList.classList.remove('dropdown__list_visible');
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            customSelectButton.classList.remove('cust-select-active');
            customSelectList.classList.remove('dropdown__list_visible');
        }
    });
});
// if the code is going to be used in old browsers
// you should add a polyfill below
// if (window.NodeList && !NodeList.prototype.forEach) {
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (var i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }

// ================================================================================================================
// mouse event
// document.addEventListener('mousemove', function (mouse) {
//     console.log(mouse);
// });
// animated blocks
/*const appear = document.querySelector('#appear');

window.onscroll = function () {
    appearBlock();
    scrollFunction();
};

function appearBlock() {
    if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
    ) {
        appear.classList.add('animate__animated', 'animate__backInLeft');
    } else {
        appear.classList.remove('animate__animated', 'animate__backInLeft');
    }
}*/

// ============================================================================================================
// counter (from 0 to 10)
const countField = document.querySelector('.own-counter__field');
const countMinus = document.querySelector('.own-counter__minus');
const countPlus = document.querySelector('.own-counter__plus');

let count = 0;

countMinus.addEventListener('click', function () {
    count--;
    if (count <= 0) {
        count = 0;
    }
    countField.textContent = count;
});

countPlus.addEventListener('click', function () {
    count++;
    if (count > 10) {
        count = 10;
    }
    countField.textContent = count;
});
