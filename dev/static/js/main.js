
// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}


// mobile-menu
/* Open when someone clicks on the span element */
function openMenu() {
    document.getElementById("mobile").style.width = "100%";
}

  /* Close when someone clicks on the "x" symbol inside the overlay */
function closeMenu() {
    document.getElementById("mobile").style.width = "0%";
}

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex == n);
}

function showSlides(n){
    let slide = document.getElementsByClassName('slide');

    if(n > slide.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slide.length;
    }

    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }

    slide[slideIndex-1].style.display = "block";
}