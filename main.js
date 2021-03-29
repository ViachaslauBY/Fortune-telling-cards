let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener('click', function () { 
        card.firstElementChild.classList.toggle('card__back-side--rotate');;         
        card.lastElementChild.classList.toggle('card__front-side--rotate');         
    });
};


// body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];