searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

window.onscroll=()=>{
    searchForm.classList.remove('active');
    if(window.scrollY>90){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

const slides = [
    'b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png', 'b6.png', 'b7.png', 'b8.png', 'b9.png', 'b10.png', 'b11.png', 'b12.png','b13.png', 'b14.png', 'b15.png'];
let currentSlide = 0;

function showSlides() {
    const images = document.querySelectorAll('.books-slider .wrapper a img');
    images.forEach((img, index) => {
        img.src = slides[(currentSlide + index) % slides.length];
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlides, 2000);
showSlides();

//Featured Slider

const slides1 = [
    'b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png', 'b6.png', 'b7.png', 'b8.png', 'b9.png', 'b10.png', 
    'b11.png', 'b12.png', 'b13.png', 'b14.png', 'b15.png'
];
let currentSlide1 = 0;
const slideCount1 = 3; // Number of slides to show at once

function showSlides1() {
    const images = document.querySelectorAll('.featured-slider .wrapper .box .image img');
    images.forEach((img, index) => {
        const slideIndex = (currentSlide1 + index) % slides1.length;
        img.src = slides1[slideIndex];
    });
}

function nextSlide() {
    currentSlide1 = (currentSlide1 + slideCount1) % slides1.length;
    showSlides1();
}

function previousSlide() {
    currentSlide1 = (currentSlide1 - slideCount1 + slides1.length) % slides1.length;
    showSlides1();
}

document.querySelector('.nxt-btn').onclick = nextSlide;
document.querySelector('.pre-btn').onclick = previousSlide;

// Initialize the slideshow
showSlides1();



