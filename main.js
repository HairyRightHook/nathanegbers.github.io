// CSS will take care of the animation, this will just flip the slides
document.addEventListener('DOMContentLoaded', main);

let currentSlide = 0;
let slides;
let bullets;
let intervalReset;
const AUTOFLIP_TIMER = 3500

function main() {
    slides = document.querySelectorAll('.slide');
    bullets = document.querySelectorAll('.bullets a');
    // Implement a slideshow, where elements with the slide class flip visibility
    // Set an autoflip timer and save the reset object
    intervalReset = setInterval(changeSlide, AUTOFLIP_TIMER, 1);
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        // If we're not on the current slide, set display to none, otherwise block
        slide.style.display = i === index ? "block" : "none";
    });
        // Fix highlight to the corresponding bullet
    bullets.forEach((bullet, i) => {
        if (i === index) {
            bullet.classList.add('current');
        } else {
            bullet.classList.remove('current');
        }
    });
}

function changeSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
    // Make sure the autoflip timer resets when the user clicks the controls
    clearInterval(intervalReset);
    intervalReset = setInterval(changeSlide, AUTOFLIP_TIMER, 1);
}

function setSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    // Make sure the autoflip timer resets when the user clicks the controls
    clearInterval(intervalReset);
    intervalReset = setInterval(changeSlide, AUTOFLIP_TIMER, 1);
}