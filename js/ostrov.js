const history = [
    {
        year: "1930",
        image: "images/history-1930.png",
        name: "Первые гидросамолёты",
        text: "Трудно поверить, но вместо прогулок и велосипедов здесь когда-то садились гидросамолёты. В 1930-х годах остров Молокова был одним из крупнейших гидроаэропортов страны"
    },

    {
        year: "1930",
        image: "images/history-1930-2.png",
        name: "Воздушные ворота Сибири",
        text: "Именно отсюда начинались полёты на Север и маршруты к труднодоступным территориям Арктики. Остров Молокова стал важной точкой освоения северных регионов страны"
    },

    {
        year: "1935",
        image: "images/history-1935.png",
        name: "Сердце гидропорта",
        text: "В этом здании располагалось управление гидропорта, где координировали работу самолётов, экипажей и северных маршрутов. Сегодня оно остаётся одним из немногих сохранившихся свидетелей той эпохи"
    },

    {
        year: "1942",
        image: "images/history-1942.png",
        name: "Трасса «Аляска — Сибирь»",
        text: "В годы Великой Отечественной войны Красноярск стал частью легендарной воздушной трассы. Здесь ремонтировали самолёты, которые продолжали свой путь к фронту"
    },

    {
        year: "Молоков",
        image: "images/history-molokov.png",
        name: "Имя, ставшее историей",
        text: "Остров получил своё название в честь Василия Молокова — легендарного полярного лётчика и Героя Советского Союза. Его имя связано с освоением Арктики и подвигами первых северных экспедиций"
    }
];
let current = 0;

const image = document.querySelector('.history-image');
const year = document.querySelector('.history-year');
const name = document.querySelector('.history-name');
const text = document.querySelector('.history-text');

function showHistory(){

    image.src = history[current].image;

    year.textContent = history[current].year;

    name.textContent = history[current].name;

    text.textContent = history[current].text;
    dots.forEach(dot=>{
    dot.classList.remove('active');
});

if(dots[current]){
    dots[current].classList.add('active');
}

}

const next = document.querySelector('.slider-next');
const prev = document.querySelector('.slider-prev');


next.addEventListener('click',()=>{

    current++;

    if(current >= history.length){
        current = 0;
    }

    showHistory();

});
prev.addEventListener('click',()=>{

    current--;

    if(current < 0){
        current = history.length - 1;
    }

    showHistory();

});

const progress = document.querySelector('.history-progress');

const dots = [];

history.forEach((item,index)=>{

    const dot = document.createElement('span');

    if(index===0){
        dot.classList.add('active');
    }

    progress.appendChild(dot);

    dots.push(dot);

});
image.classList.remove('fade');
historyInfo.classList.remove('fade');

setTimeout(()=>{
    image.classList.add('fade');
    historyInfo.classList.add('fade');
},10);

showHistory();