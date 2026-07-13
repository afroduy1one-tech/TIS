const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const slider = document.querySelector('.cards-slider');

const nextBtn = document.querySelector('.slider-next');
const prevBtn = document.querySelector('.slider-prev');


let position = 0;


nextBtn.addEventListener('click', () => {

    position++;

    slider.style.transform =
    `translateX(-${position * 33.333}%)`;

});


prevBtn.addEventListener('click', () => {

    position--;

    if(position < 0){
        position = 0;
    }

    slider.style.transform =
    `translateX(-${position * 33.333}%)`;

});
const maxPosition = 4;


nextBtn.addEventListener('click', () => {

    if(position < maxPosition){
        position++;
    }

    slider.style.transform =
    `translateX(-${position * 33.333}%)`;

});