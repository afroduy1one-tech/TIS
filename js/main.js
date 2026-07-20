const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

if(burger){

burger.addEventListener('click',()=>{
    menu.classList.toggle('active');
});

}const slider = document.querySelector('.cards-slider');

const sliderNextBtn = document.querySelector('.slider-next');
const sliderPrevBtn = document.querySelector('.slider-prev');

let cards = [];
let originalCards = [];
let position = 3;

let startX = 0;
let endX = 0;


if(slider){

    originalCards = [...slider.children];


    // клоны для бесконечности
    const firstClones = originalCards
        .slice(0,3)
        .map(card => card.cloneNode(true));

    const lastClones = originalCards
        .slice(-3)
        .map(card => card.cloneNode(true));


    lastClones.reverse().forEach(card=>{
        slider.insertBefore(card, slider.firstChild);
    });


    firstClones.forEach(card=>{
        slider.appendChild(card);
    });


    cards = [...slider.children];


    function getVisibleCards(){

        if(window.innerWidth < 768){
            return 1;
        }

        if(window.innerWidth < 1100){
            return 2;
        }

        return 3;
    }


    function getGap(){

        return parseFloat(
            getComputedStyle(slider).gap
        ) || 0;

    }


    function updateSlider(animate=true){

        const visibleCards = getVisibleCards();

        const containerWidth =
            slider.parentElement.clientWidth;


        const gap = getGap();


        const cardWidth =
        (containerWidth - gap * (visibleCards - 1))
        / visibleCards;


        cards.forEach(card=>{
            card.style.flex = `0 0 ${cardWidth}px`;
            card.style.width = `${cardWidth}px`;
        });


        slider.style.transition = animate
            ? "transform .4s ease"
            : "none";


        slider.style.transform =
        `translateX(-${position * (cardWidth + gap)}px)`;

    }



    updateSlider(false);



    slider.addEventListener(
        "transitionend",
        ()=>{

            const total = originalCards.length;


            if(position >= total + 3){

                position = 3;
                updateSlider(false);

            }


            if(position <= 2){

                position = total + 2;
                updateSlider(false);

            }

        }
    );



    // кнопки

    sliderNextBtn?.addEventListener(
        "click",
        ()=>{

            position++;
            updateSlider();

        }
    );


    sliderPrevBtn?.addEventListener(
        "click",
        ()=>{

            position--;
            updateSlider();

        }
    );



    // свайп

    slider.addEventListener(
        "touchstart",
        e=>{

            startX = e.touches[0].clientX;

        },
        {passive:true}
    );



    slider.addEventListener(
        "touchend",
        e=>{


            endX = e.changedTouches[0].clientX;


            const diff = startX - endX;


            if(Math.abs(diff) < 50){
                return;
            }


            if(diff > 0){

                position++;

            } else {

                position--;

            }


            updateSlider();


        },
        {passive:true}
    );



    window.addEventListener(
        "resize",
        ()=>{
            updateSlider(false);
        }
    );

}

const places = [
    {
        image: "images/stolby.jpg",
        title: "Восточный вход Столбы",
        description: "Исследовать",
        link:"stolby.html",
        tags:[
        "view",
        "nature",
        "walk",
        "family"
    ]
    },
    {
        image: "images/log.jpg",
        title: "Серебряный лог",
        description: "Исследовать",
        link:"log.html",
        tags:[
        "nature",
        "walk",
        "family",
        "culture"
    ]
    },
    {
        image: "images/ostrov.jpg",
        title: "Остров Молокова",
        description: "Исследовать",
        link:"ostrov.html",
        tags:[
        "water",
        "relax",
        "family",
        "easy"
        ]
    },
    {
        image: "images/dolina.png",
        title: "Юдинская Долина",
        description: "Исследовать",
        link:"dolina.html",
        tags:[
        "nature",
        "walk",
        "family",
        "relax"
        ]
    },
    {
        image: "images/griva.jpg",
        title: "Гремячая Грива",
        description: "Исследовать",
        link:"griva.html",
        tags:[
        "nature",
        "walk",
        "sport",
        "family"
        ]
    },
    {
        image: "images/sopka.webp",
        title: "Николаевская Сопка",
        description: "Исследовать",
        link:"sopka.html",
        tags:[
        "view",
        "photo",
        "easy"
        ]
    },
    {
        image: "images/hrebet.webp",
        title: "Торгашинский Хребет",
        description: "Исследовать",
        link:"hrebet.html",
        tags:[
        "view",
        "sport",
        "hard",
        "photo"
        ]
    }
];
const questions = [
    {
        title:"Что хочется найти сегодня?",
        answers : [
    {
        image:"images/test1.1.svg",
        title:"Увидеть красивый вид",
        text:"Панорамы и места с высоты",
        tag:"view"
    },
    {
        image:"images/test1.2.svg",
        title:"Оказаться среди природы",
        text:"Лес, скалы и тишина",
        tag:"nature"
    },
    {
        image:"images/test1.3.svg",
        title:"Отдохнуть у воды",
        text:"Спокойная прогулка без спешки",
        tag:"water"
    },
    {
        image:"images/test1.4.svg",
        title:"Отправиться в путь",
        text:"Маршруты и новые открытия",
        tag:"sport"
    }
]
    },

    {
        title:"Какой формат активности Вам ближе?",
        answers : [
    {
        image:"images/test2.1.svg",
        title:"Лёгкая прогулка",
        text:"Гулять, смотреть, отдыхать",
        tag:"walk"
    },
    {
        image:"images/test2.2.svg",
        title:"Активный маршрут",
        text:"Тропы и прогулка с нагрузкой",
        tag:"sport"
    },
    {
        image:"images/test2.3.svg",
        title:"Велосипед",
        text:"Пространство для активной поездки",
        tag:"bike"
    },
    {
        image:"images/test2.4.svg",
        title:"Отдых на природе",
        text:"Пикники, пляжи, спокойное время",
        tag:"relax"
    }
        ]
    },
    {
        title:"Каким Вы видите свой маршрут?",
        answers : [
    {
        image:"images/test3.1.svg",
        title:"Лего и комфортно",
        text:"Без серьёзных подъемов",
        tag:"easy"
    },
    {
        image:"images/test3.2.svg",
        title:"Хочу подняться выше",
        text:"Лестницы и подъемы",
        tag:"view"
    },
    {
        image:"images/test3.3.svg",
        title:"Готов исследовать",
        text:"Длинные маршруты и тропы",
        tag:"hard"
    },
    {
        image:"images/test3.4.svg",
        title:"Без долгих маршрутов",
        text:"Приехать, посмотреть и вернуться",
        tag:"easy"
    }
        ]
    },
    {
        title:"Что ещё важно для Вашей поездки?",
        answers : [
    {
        image:"images/test4.1.svg",
        title:"Красивые фотографии",
        text:"Места с необычными видами и атмосферой",
        tag:"photo"
    },
    {
        image:"images/test4.2.svg",
        title:"Увидеть закат",
        text:"Лучшее время - вечерние часы",
        tag:"view"
    },
    {
        image:"images/test4.3.svg",
        title:"Легко добраться",
        text:"Без долгой подготовки и сложной дороги",
        tag:"easy"
    },
    {
        image:"images/test4.4.svg",
        title:"Еду с семьёй или компанией",
        text:"Комфортное место для совместного отдыха",
        tag:"family"
    }
        ]
    }
];

function initModal(){
const modalContent = document.querySelector('.modal-content');
const modalTest = document.querySelector('.modal-test');
const resultBlock = document.querySelector('.result');
const answersBlock = document.querySelector('.answers');

const startBtn = document.querySelector('#BtnModal');

const modal = document.querySelector('.constructor-modal');
const closeModal = document.querySelector('#closeModal');

const openButtons = document.querySelectorAll('.open-modal');

openButtons.forEach(button => {

    button.addEventListener('click',(e)=>{
        e.preventDefault();

        modal.classList.add('active');

    });

});


if(closeModal){closeModal.addEventListener('click',()=>{
    modal.classList.remove('active');
});
}

startBtn.addEventListener('click',(e)=>{

    e.preventDefault();

    modalContent.classList.remove('active');

    modalTest.classList.add('active');

    renderQuestion();

});


/* ==========================
   тест
========================== */ 

let currentQuestion = 0;
let userAnswers = [];

const stepText = document.querySelector('.step');
const testTitle = document.querySelector('.modal-test h1');

function renderQuestion(){

    const question = questions[currentQuestion];

    stepText.textContent = `Шаг ${currentQuestion + 1} из 4`;

    testTitle.textContent = question.title;


    answersBlock.innerHTML = question.answers.map((answer,index)=>`

        <button class="answer-card" data-tag="${answer.tag}">

            <img src="${answer.image}">
            <h3>${answer.title}</h3>
            <p>${answer.text}</p>

        </button>

    `).join('');

}
renderQuestion();

function showResult(){

    modalTest.classList.remove('active');

    resultBlock.classList.add('active');

    stepText.textContent = "Результат";

    renderResults();
}

    answersBlock.addEventListener('click',(event)=>{

    const card = event.target.closest('.answer-card');

    if(!card) return;

    card.classList.add('selected');

    userAnswers[currentQuestion] = card.dataset.tag;


    console.log(userAnswers);


    setTimeout(()=>{

        if(currentQuestion < questions.length - 1){

            currentQuestion++;
            renderQuestion();

        } else {

            showResult();

        }

    }, 500);

});

const nextBtn = document.querySelector('.modal-next');

if(nextBtn){
    nextBtn.addEventListener('click',()=>{

        if(currentQuestion < questions.length - 1){

            currentQuestion++;
            renderQuestion();

        } else {

            showResult();

        }

    });
}

const prevBtn = document.querySelector('.modal-prev');

if(prevBtn){
    prevBtn.addEventListener('click',()=>{

        if(currentQuestion > 0){

            currentQuestion--;
            renderQuestion();

        } else {

            modalTest.classList.remove('active');

            modalContent.classList.add('active');

            stepText.textContent = "";
            userAnswers = [];

        }

    });
}
/* ==========================
   карточки рез
========================== */

const modalCards = document.querySelector('.modal-cards');

const resultBack = document.querySelector('.result-back');


if(resultBack){
    resultBack.addEventListener('click',()=>{

        resultBlock.classList.remove('active');

        modalTest.classList.add('active');

        currentQuestion = questions.length - 1;

        renderQuestion();

    });
}

function getResults(){
    let scores = places.map(place=>{
        let score = 0;
        userAnswers.forEach(answer=>{
            if(place.tags.includes(answer)){
                score++;
            }
        });
        return {
            ...place,
            score};
        });
        return scores
        .filter(place => place.score > 0)
        .sort((a,b)=>b.score-a.score)
        .slice(0,3);
}

function renderResults(){
modalCards.innerHTML = getResults().map(place =>`
    <div class="modal-card">
        <img src="${place.image}">
        <h3>${place.title}</h3>
            <div class="result-card-footer">
                <p>${place.description}</p>
                    <a href="${place.link || 'javascript:void(0)'}" class="card-next">
&rarr;
</a>
            </div>
    </div>
`).join('');
}   
}
fetch('modal.html')
.then(response => response.text())
.then(data => {

    document.querySelector('#modal-container').innerHTML = data;

    initModal();

})