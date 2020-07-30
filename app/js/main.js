// burger menu
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('locked');
    });
});
// ================================================================================================================
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
// =================================================================================================================
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
// ====================================================================================================================
// fixed menu
$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $('.header').addClass('header_fixed');
    } else {
        $('.header').removeClass('header_fixed');
    }
});
// ================================================================================================================
// magnific
// $('.column__pics').magnificPopup({
//     delegate: 'a',
//     type: 'image',
//     tLoading: 'Loading image #%curr%...',
//     mainClass: 'mfp-img-mobile',
//     gallery: {
//         enabled: true,
//         navigateByImgClick: true,
//         preload: [1, 1], // Will preload 0 - before current, and 1 after the current image
//     },
// });
// ========================================================================================================================
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
// =================================================================================================================
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
// ==================================================================================================================
// select calculation
// $('.calc__select').each(function () {
//     // Variables
//     let $this = $(this),
//         selectOption = $this.find('option'),
//         selectOptionLength = selectOption.length,
//         selectedOption = selectOption.filter(':selected'),
//         dur = 200;

//     $this.hide();
//     // Wrap all in select box
//     $this.wrap('<div class="calc__select"></div>');
//     // Style box
//     $('<div>', {
//         class: 'select__gap',
//         text: 'Please select', //Placeholder
//     }).insertAfter($this);

//     let selectGap = $this.next('.select__gap'),
//         caret = selectGap.find('.caret');
//     // Add ul list
//     $('<ul>', {
//         class: 'select__list',
//     }).insertAfter(selectGap);

//     let selectList = selectGap.next('.select__list');
//     // Add li - option items
//     for (let i = 0; i < selectOptionLength; i++) {
//         $('<li>', {
//             class: 'select__item',
//             html: $('<span>', {
//                 text: selectOption.eq(i).text(),
//             }),
//         })
//             .attr('data-value', selectOption.eq(i).val())
//             .appendTo(selectList);
//     }
//     // Find all items
//     let selectItem = selectList.find('li');

//     selectList.slideUp(0);
//     selectGap.on('click', function () {
//         if (!$(this).hasClass('on')) {
//             $(this).addClass('on');
//             selectList.slideDown(dur);
//             selectItem.on('click', function () {
//                 let chooseItem = $(this).data('value');
//                 $('select').val(chooseItem).attr('selected', 'selected');
//                 selectGap.text($(this).find('span').text());
//                 selectList.slideUp(dur);
//                 selectGap.removeClass('on');
//             });
//         } else {
//             $(this).removeClass('on');
//             selectList.slideUp(dur);
//         }
//     });
// });
// ==================================================================================================================
// calculation itself
// $('.calc__form select').change(function () {
//     $edition = $('#edition').val();
//     $paper = $('#paper').val();
//     $paperRatio = $('#paper option:selected').attr('data-paper');
//     $colour = $('#colour').val();
//     $print = $('#colour option:selected').attr('data-print');
//     $kind = $('#colour option:selected').attr('data-kind');
//     $card = $('#colour option:selected').attr('data-colour');
//     if ($card == 01) {
//         $('.calc__img img').hide();
//         $('#card-1').show(600);
//     }
//     if ($card == 02) {
//         $('.calc__img img').hide();
//         $('#card-2').show(600);
//     }
//     if ($card == 03) {
//         $('.calc__img img').hide();
//         $('#card-3').show(600);
//     }
//     if ($card == 04) {
//         $('.calc__img img').hide();
//         $('#card-4').show(600);
//     }
//     if ($card == 05) {
//         $('.calc__img img').hide();
//         $('#card-5').show(600);
//     }
//     $division = 30;
//     $final = $edition / $division;
//     $price = $edition * $paperRatio + parseInt($print) + $final * $print;
//     $finalPrice = $('span#final-price');
//     $finalPrice.text($price.toFixed(0));
//     console.log($price);
// });
// // ====================================================================================================================
// // form counter
// DecreaseCount = function () {
//     let count = $('.counter__display').val();
//     if (count > 1) count--;
//     if (count == 1) count = 1;
//     $('.counter__display').val(count);
//     console.log(count);
// };

// IncreaseCount = function () {
//     let count = $('.counter__display').val();
//     if (count < 10) count++;
//     if (count == 10) count = 10;
//     $('.counter__display').val(count);
//     console.log(count);
// };

// $('.minus').click(function () {
//     DecreaseCount();
// });

// $('.plus').click(function () {
//     IncreaseCount();
// });

// ===========================================================================================================
// form 2

$('.counter-control').click(function () {
    let input = this.parentNode.querySelector('#counter-input');
    // console.log(input);
    if (this.classList.contains('plus')) {
        input.value++;
    } else if (this.classList.contains('minus') && input.value > 0) {
        input.value--;
    }
    let inputValue = input.value;
    // console.log(inputValue);
});
$('.form__params').change(function () {
    let inputMaterial = document.querySelector('select#first option:checked')
        .value;
    // console.log(inputMaterial);
    let inputQuality = document.querySelector('select#second option:checked')
        .value;
    // console.log(inputQuality);
    let inputColour = document.querySelector('select#third option:checked')
        .value;
    // console.log(inputColour);
});
$('.calculation__form').change(function () {
    let firstInput = document.querySelector('select#first option:checked')
        .value;
    let secondInput = document.querySelector('select#second option:checked')
        .value;
    let thirdInput = document.querySelector('select#third option:checked')
        .value;
    let counterInput = document.querySelector('#counter-input').value;
    // let minusCounter = document.querySelector('.minus');
    // let plusCounter = document.querySelector('.plus');
    let totalPrice = (+firstInput + +secondInput + +thirdInput) * counterInput;
    console.log(totalPrice);
});
