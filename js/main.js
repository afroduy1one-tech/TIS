const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
const slider = document.querySelector('.cards-slider');
const cards = document.querySelectorAll('.cards-slider .card');

const nextBtn = document.querySelector('.slider-next');
const prevBtn = document.querySelector('.slider-prev');


let position = 0;


const cardWidth = cards[0].offsetWidth + 40;
const maxPosition = cards.length - 3; // 7 карточек, показываем 3


nextBtn.addEventListener('click', () => {

    if(position < maxPosition){
        position++;
    }

    slider.style.transform =
    `translateX(-${position * cardWidth}px)`;

});


prevBtn.addEventListener('click', () => {

    if(position > 0){
        position--;
    }

    slider.style.transform =
    `translateX(-${position * cardWidth}px)`;

});
