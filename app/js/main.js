// default variables
const header = document.querySelector('.header');
const tabsContainer = document.querySelector('.tabs-page');
const catalogueFilter = document.querySelectorAll('.catalogue-filter');
const foldAside = document.querySelector('.fold-aside');
const catalogGoodsGrid = document.querySelector('.catalogue-goods__grid');
const customSelect = document.querySelectorAll('.cust-sel');
const catalogueTopCloseBtn = document.querySelector('.top__close');
const headerTop = document.querySelector('.header_top');
const colourSelect = document.querySelector('.colour-select');
const sizeSelect = document.querySelector('.size-select');
const goodsGrid = document.querySelector('.tab');
const loadMore = document.querySelector('.tab__show-more');
const toTop = document.querySelector('.toTop');

// =================================================================================================

// =================================================================================================



// =================================================================================================

// =================================================================================================
// custom-select 2
if (customSelect) {
    customSelect.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('cust-sel_active');
            if (e.target.classList.contains('cust-sel__item')) {
                let text = e.target.textContent;
                e.currentTarget.querySelector('.cust-sel__top').textContent = text;
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
            e.currentTarget.querySelector('.colour-select__done span').textContent = colourText;
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
            e.currentTarget.querySelector('.size-select__done span').textContent = sizeText;
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
// tabs page
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
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTop.classList.add('show');
    } else {
        toTop.classList.remove('show');
    }
}

function onTheTop() {
    let position = document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0;
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
    const customSelectButton = everyCustomSelect.querySelector('.custom-select__btn');
    const customSelectButtonSpan = everyCustomSelect.querySelector('.custom-select__btn span');
    const customSelectList = everyCustomSelect.querySelector('.custom-select__list');
    const customSelectItem = customSelectList.querySelectorAll('.custom-select__item');
    const customSelectInput = everyCustomSelect.querySelector('.custom-select__input_hidden');

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
// ====================================================================================


// the code below works well, though errors are underlined
@@include('./chunks/_hi.js')
@@include('./chunks/_card_slider.js')
@@include('./chunks/_filter.js')
@@include('./chunks/_accordion.js')
@@include('./chunks/_tabs.js')
@@include('./chunks/_form.js')
@@include('./chunks/_counter.js')
@@include('./chunks/_burger.js')
@@include('./chunks/_popup.js')
@@include('./chunks/_vertical_tabs.js')
@@include('./chunks/_columns_number.js')
@@include('./chunks/_single_custom_select.js')
@@include('./chunks/_swiper_slider.js')