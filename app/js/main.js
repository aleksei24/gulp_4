// default variables
const catalogueFilter = document.querySelectorAll('.catalogue-filter');
const foldAside = document.querySelector('.fold-aside');
const catalogGoodsGrid = document.querySelector('.catalogue-goods__grid');
const headerTop = document.querySelector('.header_top');


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
@@include('./chunks/_colour_select.js')
@@include('./chunks/_size_select.js')
@@include('./chunks/_custom_select.js')
@@include('./chunks/_tabs_page.js')
@@include('./chunks/_advert_top.js')
@@include('./chunks/_fixed_header.js')
@@include('./chunks/_up_to.js')
@@include('./chunks/_show_more.js')