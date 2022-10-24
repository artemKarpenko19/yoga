new Swiper( ".about-us__slider-js" , {

    navigation : {
        nextEl: ".about-us__btn-next",
        prevEl: ".about-us__btn-prev"
    },
    effect: 'slide',
    pagination: {
        el: '.about-us__pagination',
        clickable: true
    },
});

new Swiper( ".trainer__slider" , {
    navigation : {
        nextEl: ".next-trainer-slider-btn-next",
        prevEl: ".next-trainer-slider-btn-prev"
    },

    pagination: {
        el: '.trainer__pagination',
        clickable: true
    },
});

new Swiper( ".next-trainer-slider " , {
    
    navigation : {
        nextEl: ".next-trainer-slider-btn-next",
        prevEl: ".next-trainer-slider-btn-prev"
    },

    pagination: {
        el: '.next-trainer__pagination',
        clickable: true
    },
});

$(document).ready(function() {
    $('input[type="tel"]').mask('+380-0000-000-00');

    // burger menu
    $('.hamburger').on('click', function(){
        $('.hamburger,.nav__menu,.header').toggleClass('is-active');
    })
});
