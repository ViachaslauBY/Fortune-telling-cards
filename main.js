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
]



for (let i = 0; i < cardsTextSubtitle.length; i++) {
    let cardTextSubtitle = cardsTextSubtitle[i];
    button.addEventListener('click', function () { 
        cardTextSubtitle.innerHTML = arr[Math.floor(Math.random() * arr.length)];                   
    });           
}; 


for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener('click', function () { 
        card.firstElementChild.classList.toggle('card__back-side--rotate');        
        card.lastElementChild.classList.toggle('card__front-side--rotate');                
    });
    
};


// body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];