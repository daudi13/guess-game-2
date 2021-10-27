'use strict';

const theNumber = document.querySelector('.number');
const theInput = document.querySelector('input');
const btnCheck = document.querySelector('.check');
const theMessage = document.querySelector('.message');
const theScore = document.querySelector('.score');
const theHighscore = document.querySelector('.highscore');
const btnAgain = document.querySelector('highscore');
const body = document.querySelector('body');
const victory = document.getElementById('victory');
const wrong = document.getElementById('wrong');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


btnCheck.addEventListener('click', function () {
    const guess = Number(theInput.value);
    
    if (!guess) {
        theMessage.innerHTML = 'No input'
    } else if (guess === randomNumber) {
        theNumber.innerHTML = randomNumber;
        body.style.backgroundColor = `#31f300`;
        theNumber.style.width = `30rem`;
        victory.play();
    } else if (guess !== randomNumber) {
        score--
        theScore.innerHTML = score;
        wrong.play();

        guess > 1 ? theMessage.innerHTML = `too high` : theMessage.innerHTML = `too low`;
    }
})