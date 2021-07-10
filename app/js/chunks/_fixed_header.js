// fixed menu

const header = document.querySelector('.header');

if (header) {
    window.onscroll = function () {
        fixedHeader();
    };
}

if (header.classList.contains('header_top')) {
    header.style.top = -40;
} else {
    header.style.top = 0;
}

function fixedHeader() {
    if (window.pageYOffset >= 50) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}
