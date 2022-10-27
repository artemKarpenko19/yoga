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
let pricesSlider = new Swiper( ".prices__slider" , {
    slidesPerView: 3 ,
    loop: true,
    spaceBetween: 20,
    effect: 'slide',
    pagination: {
        el: '.prices__pagination',
        clickable: true
    },
    breakpoints: {
        320 : {
            enabled: true,
             spaceBetween: 20,
             slidesPerView: 1,
             centeredSlides: true,
             centeredSlidesBounds: true,
             
             },
    
        900: {
            slidesPerView: 3 ,
            spaceBetween: 20,
            enabled: false,
        }}
});



let trainerSlider = new Swiper( ".trainer__slider" , {
    
    navigation : {
        nextEl: ".next-trainer-slider-btn-next",
        prevEl: ".next-trainer-slider-btn-prev"
    },

    slidesPerView: 1 ,
    spaceBetween: 20,


    pagination: {
        el: '.next-trainer__pagination',
        clickable: true
    },
});

let nextTrainerSlider = new Swiper( ".next-trainer-slider " , {
    
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

    // burger 
    $('.hamburger,.nav__menu,.header',).removeClass('is-active'),
    $('.hamburger').on('click', function(){
        $('.hamburger').toggleClass('is-active');
        $('.nav__menu,.header').toggleClass('is-active');
    })
    $('.nav__menu').on('click', function(){
        $('.hamburger').toggleClass('is-active');
        $('.nav__menu,.header').toggleClass('is-active');
    })

    
});


nextTrainerSlider.controller.control = trainerSlider;
trainerSlider.controller.control = nextTrainerSlider;

