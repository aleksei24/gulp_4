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

// main-popup
// setTimeout(() => {
//     $('.order').addClass('active');
// }, 10000);
// $('.order__close').click(function () {
//     $('.order').removeClass('active');
// });

$('#mobId').click(function (event) {
    $('.order').addClass('mob');
    $('.order__close').click(function () {
        $('.order').removeClass('mob');
    });
});

// fixed menu
$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $('.header').addClass('header_fixed');
    } else {
        $('.header').removeClass('header_fixed');
    }
});

// magnific
$('.column__pics').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [1, 1], // Will preload 0 - before current, and 1 after the current image
    },
});

// custom select
$('.drop .option').click(function () {
    let val = $(this).attr('data-value'),
        $drop = $('.drop'),
        prevActive = $('.drop .option.active').attr('data-value'),
        options = $('.drop .option').length;
    $drop.find('.option.active').addClass('mini-hack');
    $drop.toggleClass('visible');
    $drop.removeClass('withBG');
    $(this).css('top');
    $drop.toggleClass('opacity');
    $('.mini-hack').removeClass('mini-hack');
    if ($drop.hasClass('visible')) {
        setTimeout(function () {
            $drop.addClass('withBG');
        }, 400 + options * 100);
    }
    triggerAnimation();
    if (val !== 'placeholder' || prevActive === 'placeholder') {
        $('.drop .option').removeClass('active');
        $(this).addClass('active');
    }
});

function triggerAnimation() {
    let finalWidth = $('.drop').hasClass('visible') ? 22 : 20;
    $('.drop').css('width', '24em');
    setTimeout(function () {
        $('.drop').css('width', finalWidth + 'em');
    }, 400);
}

// jquery counter
DecreaseCount = function () {
    let count = $('.display').val();
    if (count > 0) count--;
    if (count == 0) count = 0;
    $('.display').val(count);
};

IncreaseCount = function () {
    let count = $('.display').val();
    if (count < 10) count++;
    if (count == 10) count = 10;
    $('.display').val(count);
};

$('.decrement').click(function () {
    DecreaseCount();
});

$('.increment').click(function () {
    IncreaseCount();
});
