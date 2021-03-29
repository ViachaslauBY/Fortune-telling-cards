let cards = document.querySelectorAll('.card');
let cardsTextSubtitle = document.querySelectorAll('.card__text-subtitle');
let button = document.querySelector('.button');
let arr = [
    'be very happy', 
    'be famous', 
    'fall in love', 
    'be lucky', 
    'get married',
    'get a new job',   
    'get a lot of money',   
    'get sick',   
    'be unhappy',   
    'get a divorce',   
    'move house',   
    'travel',
    'borrow money',   
    'get the good news',   
    'have a surprise',   
    'meet somebody new',   
    'die',   
    'get fat',   
    'lose weight',   
    'work hard',   
    'do anything',   
    'have fun',   
    'be upset',   
    'commit suicide',   
    'have a baby',   
    'lose a loved one',   
    'get a lot of rest',   
    'spend a lot of money',   
    'lose your job',   
    'adopt a child',   
    'crash the car',
    'burn the house',
    'buy a car',
    'buy a plane',
    'fight with your friends',
]

for (let i = 0; i < cardsTextSubtitle.length; i++) {
    let cardTextSubtitle = cardsTextSubtitle[i];             
    cardTextSubtitle.innerHTML = arr[Math.floor(Math.random() * arr.length)];                     
}; 


for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener('click', function () { 
        card.firstElementChild.classList.toggle('card__back-side--rotate');        
        card.lastElementChild.classList.toggle('card__front-side--rotate');                
    });    
};

button.addEventListener('click', function () { 
    location.reload();           
});