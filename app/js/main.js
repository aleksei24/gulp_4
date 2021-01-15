// default variables
const header = document.querySelector('.header');
const popup = document.querySelector('.popup');
const tabsContainer = document.querySelector('.tabs');
const catalogueFilter = document.querySelectorAll('.catalogue-filter');
const foldAside = document.querySelector('.fold-aside');
const catCols = document.querySelector('.catalogue-cols__list');
const catalogGoodsGrid = document.querySelector('.catalogue-goods__grid');
const catalogFilterItems = document.querySelectorAll('.catalogue-filter__item');
const catalogChoice = document.querySelector('.catalogue-choice');
const customSelect = document.querySelectorAll('.cust-sel');
const singleCustomSelect = document.querySelector('.single-select');
const catalogueTopCloseBtn = document.querySelector('.top__close');
const headerTop = document.querySelector('.header_top');
const colourSelect = document.querySelector('.colour-select');
const sizeSelect = document.querySelector('.size-select');
const counter = document.querySelector('.own-counter');
const cardSlider = document.querySelector('.card-slider');
const verticalTabs = document.querySelector('.vertical-tabs');
const goodsGrid = document.querySelector('.tab');
const loadMore = document.querySelector('.tab__show-more');
const toTop = document.querySelector('.toTop');
const burger = document.querySelector('.burger');

// =================================================================================================
// burger js
if (burger) {
    burger.addEventListener('click', toggleMenu);
}

function toggleMenu() {
    const icon = document.querySelector('.icon-burger');
    const menu = document.querySelector('.menu-burger__list');
    const bodyLock = document.querySelector('body');
    icon.classList.toggle('active');
    menu.classList.toggle('active');
    bodyLock.classList.toggle('locked');
}

// =================================================================================================
// Swiper
const indexSwiper = new Swiper('.index-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,

    // Navigation arrows
    /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/

    // autoplay
    autoplay: {
        delay: 5000,
    },

    // pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

const catalogueSwiper = new Swiper('.catalog-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1500,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // autoplay
    /*autoplay: {
        delay: 45000,
    },*/

    // pagination
    /*pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },*/
});
// =================================================================================================
// popup
const closePopup = document.querySelector('.popup__close');
const popupTitle = document.querySelector('.popup__title');
const popupWhen = document.querySelector('.popup__from');
const popupData = [
    {
        title: 'A coat',
        when: 'A minute ago',
    },
    {
        title: 'A dress',
        when: '30 seconds ago',
    },
    {
        title: 'A suit',
        when: 'Now',
    },
];
let popupCount = 0;
let popupDelay = 90000;
let exposeFor = 4000;
if (popup) {
    closePopup.addEventListener('click', function () {
        popup.classList.add('remove');
    });

    setInterval(changPopupData, popupDelay);
}

function changPopupData() {
    popup.classList.remove('active');
    popup.classList.remove('remove');
    setTimeout(() => {
        popup.classList.add('active');
    }, popupDelay - exposeFor);
    const titlePopup = `${popupData[popupCount].title}`;
    const timePopup = `${popupData[popupCount].when}`;
    popupTitle.textContent = titlePopup;
    popupWhen.textContent = timePopup;
    popupCount++;
    if (popupCount === popupData.length) {
        popupCount = 0;
    }
}
// =================================================================================================
// filter
const createChoiceItem = (txt) => {
    return `
        <a href="#!" class="catalogue-choice__btn" data-choice-txt="${txt}">
        ${txt}
        <span></span>
    </a>
        `;
};

if (catalogFilterItems) {
    catalogFilterItems.forEach((elem) => {
        elem.querySelector('input').addEventListener('change', (e) => {
            let checked = elem.querySelector('input').checked;
            if (checked) {
                elem.querySelector('.checkbox__box').classList.add(
                    'checkbox__box_mark'
                );
                let text = elem.querySelector('.checkbox__text').textContent;
                catalogChoice.insertAdjacentHTML(
                    'afterbegin',
                    createChoiceItem(text)
                );
            } else {
                elem.querySelector('.checkbox__box').classList.remove(
                    'checkbox__box_mark'
                );
                let text = elem.querySelector('.checkbox__text').textContent;
                document.querySelector(`[data-choice-txt="${text}"]`).remove();
            }

            let activeCheckbox = document.querySelectorAll(
                '.checkbox__box_mark'
            );
            if (activeCheckbox.length > 0) {
                catalogChoice.style.display = 'flex';
            } else {
                catalogChoice.style.display = 'none';
            }
        });
    });
}

if (catalogChoice) {
    catalogChoice.addEventListener('click', (e) => {
        if (e.target.classList.contains('catalogue-choice__btn')) {
            e.target.remove();

            let choiceText = e.target.textContent.trim();

            document
                .querySelector(`[data-txt="${choiceText}"]`)
                .querySelector('input').checked = false;
            document
                .querySelector(`[data-txt="${choiceText}"]`)
                .classList.remove('checkbox__box_mark');
        }

        if (e.target.classList.contains('catalogue-choice__clear')) {
            Array.from(e.currentTarget.children).forEach(function (elem) {
                if (!elem.classList.contains('catalogue-choice__clear')) {
                    elem.remove();
                }
                catalogFilterItems.forEach((elem) => {
                    elem.querySelector('input').checked = false;
                    elem.querySelector('.checkbox__box').classList.remove(
                        'checkbox__box_mark'
                    );
                });
            });
            e.currentTarget.style.display = 'none';
        }

        if (e.currentTarget.children.length === 1) {
            e.currentTarget.style.display = 'none';
        }
    });
}

// =================================================================================================
// columns number
if (catCols) {
    catCols.addEventListener('click', (e) => {
        if (
            e.target.classList.contains('catalogue-cols__btn') ||
            e.target.closest('catalogue-cols__item')
        ) {
            let columns = e.target.dataset.cols;
            catalogGoodsGrid.dataset.gridCol = columns;
            let colsBtn = document.querySelectorAll('.catalogue-cols__btn');
            colsBtn.forEach((elem) => {
                elem.classList.remove('catalogue-cols__btn_act');
            });

            e.target.classList.add('catalogue-cols__btn_act');
        }
    });
    // if (window.innerWidth <= 992) {
    //     let colsNum = 3;
    //     let goodsGrid = document.querySelector('.catalogue-goods__grid');
    //     goodsGrid.setAttribute('data-grid-col', colsNum);
    // }
}
// =================================================================================================
// custom-select 2
if (customSelect) {
    customSelect.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('cust-sel_active');
            if (e.target.classList.contains('cust-sel__item')) {
                let text = e.target.textContent;
                e.currentTarget.querySelector(
                    '.cust-sel__top'
                ).textContent = text;
            }
        });
    });
}
// =================================================================================================
// colour-select
if (colourSelect) {
    colourSelect.addEventListener('click', (e) => {
        if (e.target.classList.contains('colour-select__btn')) {
            document.querySelectorAll('.colour-select__btn').forEach((elem) => {
                elem.classList.remove('colour-select__btn_active');
            });
            let colourText = e.target.dataset.colour;
            e.currentTarget.querySelector(
                '.colour-select__done span'
            ).textContent = colourText;
            e.target.classList.add('colour-select__btn_active');
        }
    });
}
// =================================================================================================
// size-select
if (sizeSelect) {
    sizeSelect.addEventListener('click', (e) => {
        if (e.target.classList.contains('size-select__btn')) {
            document.querySelectorAll('.size-select__btn').forEach((elem) => {
                elem.classList.remove('size-select__btn_active');
            });
            let sizeText = e.target.dataset.size;
            e.currentTarget.querySelector(
                '.size-select__done span'
            ).textContent = sizeText;
            e.target.classList.add('size-select__btn_active');
        }
    });
}
// =================================================================================================
// catalogue top
if (catalogueTopCloseBtn) {
    catalogueTopCloseBtn.addEventListener('click', (el) => {
        el.currentTarget.closest('.top').style.display = 'none';
    });
}
// =================================================================================================
// fixed menu
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

// ================================================================================================
// tabs JS
const tabsControls = [].slice.call(document.querySelectorAll('.control'));

if (tabsContainer) {
    let setTab = function () {
        let num = tabsControls.indexOf(this);
        tabsContainer.style.left = `${-num * 100}%`;

        for (let control of tabsControls) {
            control.classList.remove('active');
        }
        this.classList.add('active');
    };

    for (let control of tabsControls) {
        control.addEventListener('click', setTab);
    }
}
// =================================================================================================
// vertical tabs
if (verticalTabs) {
    (function () {
        let vertTabs = function () {
            let tabs = document.querySelectorAll('.vertical-tabs')[0];

            tabs.addEventListener('click', function (e) {
                let elem = e.target,
                    activeTab = document.querySelector(
                        '.vertical-tabs .active'
                    ),
                    activeContent = document.querySelector('.item.active'),
                    elemAttr = elem.getAttribute('rel');

                activeTab.classList.remove('active');
                activeContent.classList.remove('active');

                elem.parentElement.classList.add('active');
                document.getElementById(elemAttr).classList.add('active');
            });
        };

        window.onload = vertTabs;
    })();
}

// =================================================================================================
// aside
catalogueFilter.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('catalogue-filter_open');
    });
});

if (foldAside) {
    foldAside.addEventListener('click', (e) => {
        catalogueFilter.forEach((elem) => {
            elem.classList.remove('catalogue-filter_open');
        });
    });
}

// =================================================================================================
// upTo
if (toTop) {
    window.onscroll = function () {
        scrollFunction();
        fixedHeader();
    };

    toTop.addEventListener('click', onTheTop);
}

function scrollFunction() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        toTop.classList.add('show');
    } else {
        toTop.classList.remove('show');
    }
}

function onTheTop() {
    let position =
        document.body.scrollTop !== 0 ||
        document.documentElement.scrollTop !== 0;
    if (position) {
        window.scrollBy(0, -40);
        requestAnimationFrame(onTheTop);
    }
}

// in window.scrollBy(0, -30), changing a second parameter(-30) affects the speed of scrolling
// less than -30 means faster speed
// greater than -30 means slower speed
// a second parameter must be negative, otherwise it won`t work

// =================================================================================================
// custom-select
// for only one custom-select element unwrap the code out of block.forEach
const customSelectBlock = document.querySelectorAll('.custom-select');
customSelectBlock.forEach(function (everyCustomSelect) {
    const customSelectButton = everyCustomSelect.querySelector(
        '.custom-select__btn'
    );
    const customSelectButtonSpan = everyCustomSelect.querySelector(
        '.custom-select__btn span'
    );
    const customSelectList = everyCustomSelect.querySelector(
        '.custom-select__list'
    );
    const customSelectItem = customSelectList.querySelectorAll(
        '.custom-select__item'
    );
    const customSelectInput = everyCustomSelect.querySelector(
        '.custom-select__input_hidden'
    );

    customSelectButton.addEventListener('click', function () {
        customSelectList.classList.toggle('dropdown__list_visible');
        this.classList.add('custom-select-active');
    });
    customSelectItem.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            customSelectButton.innerText = this.innerText;
            customSelectInput.value = this.dataset.value;
            customSelectList.classList.remove('dropdown__list_visible');
        });
    });
    document.addEventListener('click', function (e) {
        if (e.target !== customSelectButton) {
            customSelectButton.classList.remove('custom-select-active');
            customSelectList.classList.remove('dropdown__list_visible');
        }
    });
    /*document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            customSelectButton.classList.remove('custom-select-active');
            customSelectList.classList.remove('dropdown__list_visible');
        }
    });*/
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

// ====================================================================================================
// single custom select
if (singleCustomSelect) {
    const customSelectButton = document.querySelector('.single-select__top');
    const customSelectList = document.querySelector('.single-select__list');
    const customSelectItem = customSelectList.querySelectorAll(
        '.single-select__item'
    );
    const customSelectInput = document.querySelector(
        '.single-select__input_hidden'
    );

    customSelectButton.addEventListener('click', function () {
        customSelectList.classList.toggle('dropdown__list_visible');
        this.classList.add('active');
    });
    customSelectItem.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            customSelectButton.innerText = this.innerText;
            customSelectInput.value = this.dataset.value;
            customSelectList.classList.remove('dropdown__list_visible');
        });
    });
    document.addEventListener('click', function (e) {
        if (e.target !== customSelectButton) {
            customSelectButton.classList.remove('active');
            customSelectList.classList.remove('dropdown__list_visible');
        }
    });
}

// =================================================================================================
// counter (from 0 to 10)
if (counter) {
    const countField = document.querySelector('.own-counter__field');
    const countMinus = document.querySelector('.own-counter__minus');
    const countPlus = document.querySelector('.own-counter__plus');

    let count = 1;

    countMinus.addEventListener('click', function () {
        count--;
        if (count <= 1) {
            count = 1;
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
}
// =================================================================================================
// card-slider
if (cardSlider) {
    const cardSliderThumbs = document.querySelector('.card-slider__thumbs');
    const cardSliderMain = document.querySelector('.card-slider__main img');
    const cardSliderMainPicture = document.querySelector(
        '.card-slider__main source'
    );

    cardSliderThumbs.addEventListener('click', (e) => {
        if (e.target.classList.contains('card-slider__thumb')) {
            let src = e.target.querySelector('img').getAttribute('src');
            cardSliderMainPicture.setAttribute('srcset', src);
            cardSliderMain.setAttribute('src', src);
        }
    });
}
// =================================================================================================
// show more
if (goodsGrid && loadMore) {
    const fetchGoods = (line = 3) => {
        fetch('js/goods.json')
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    if (i < line) {
                        goodsGrid.innerHTML += `
                            <div class="trainers__card">
                                <a href="#!" class="trainers__img">
                                    <img src="${data[i].source}" alt="${data[i].title}" />
                                </a>
                                <div class="trainers__descript">
                                    <h3 class="trainers__headline">${data[i].title}</h3>
                                    <p class="trainers__text">
                                        Our staff includes amazing professionals that have
                                        an eye for crossfit.
                                    </p>
                                    <span>${data[i].price}</span>
                                </div>
                            </div>
                        `;
                    }
                }
            });
    };
    let amountOfGoods = 3;
    // fetchGoods(amountOfGoods);
    loadMore.addEventListener('click', (e) => {
        amountOfGoods += 3;
        fetchGoods(amountOfGoods);
    });
}
// =================================================================================================
// form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form');
    const input = document.querySelectorAll('input');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData();
        formData.append('image', formImage.files[0]);

        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
            } else {
                alert('Error');
            }
        } else {
            alert('Fill in required fields');
        }
    }

    function formValidate(form) {
        let err = 0;
        let formReq = document.querySelectorAll('.req');

        for (let i = 0; i < formReq.length; i++) {
            const elem = formReq[i];
            formRemoveError(elem);

            if (elem.classList.contains('_email')) {
                if (emailTest(elem)) {
                    formAddError(elem);
                    err++;
                }
            } else if (
                elem.getAttribute('type') === 'ckeckbox' &&
                elem.checked === false
            ) {
                formAddError(elem);
                err++;
            } else {
                if (elem.value === '') {
                    formAddError(elem);
                    err++;
                }
            }
        }
        return err;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
            input.value
        );
    }

    const formImage = document.querySelector('#form-image');
    const formPreview = document.querySelector('.file__preview');
    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
    });

    function uploadFile(file) {
        if (!['image/jpg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Only images are allowed');
            formImage.value = '';
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            alert('File must be less than 2MB');
            return;
        }

        let showImage = new FileReader();
        showImage.onload = (e) => {
            formPreview.innerHTML = `<img src='${e.target.result}' alt='Image'`;
        };
        showImage.onerror = (e) => {
            alert('Error');
        };
        showImage.readAsDataURL(file);
    }
});
