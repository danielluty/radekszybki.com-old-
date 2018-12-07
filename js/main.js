/* *** Menu Toggle *** */
$(function () {
    $('.nav-toggler').click(function () {
        $('.nav-ul').slideToggle();
    });
    $(window).resize(function () {
        if ($(window).width() > 640) {
            $('.nav-ul').removeAttr('style');
        };
    });
})

/* *** IMAGE SLIDER *** */
/* Show image when clicked */
function openSlider() {
    document.getElementById('image-slider').style.display = "inline-flex";
    document.body.style.overflow = "hidden";
    document.getElementById('my-navbar').style.display = "none";
}

/* Close slider */
function closeSlider() {
    document.getElementById('image-slider').style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById('my-navbar').style.display = "flex";
}

let slideIndexJS = 1;

showSlides(slideIndexJS);

function changeSlides(n) {showSlides(slideIndexJS += n);}

function currentSlide(n) {showSlides(slideIndexJS = n);}

function showSlides(n) {

    let i;
    let slidesJS = document.getElementsByClassName('slides');

    if (n > slidesJS.length) {slideIndexJS = 1;}

    if (n < 1) {slideIndexJS = slidesJS.length;}

    for (i = 0; i < slidesJS.length; i++) {slidesJS[i].style.display = "none";}

    slidesJS[slideIndexJS - 1].style.display = "block";
}