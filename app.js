'use strict';

const theNumber = document.querySelector('.number');
const theInput = document.querySelector('input');
const btnCheck = document.querySelector('.check');
const theMessage = document.querySelector('.message');
const theScore = document.querySelector('.score');
const theHighscore = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');
const body = document.querySelector('body');
const victory = document.getElementById('victory');
const wrong = document.getElementById('wrong');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

btnCheck.addEventListener('click', function () {
    
    const guess = Number(theInput.value);

    if (!guess) {
        theMessage.innerHTML = `NO NUMBER!!`;
    } else if (guess === randomNumber) {
        theMessage.innerHTML = 'Great shot';
        theNumber.innerHTML = randomNumber;
        body.style.backgroundColor = '#f34544';
        theNumber.style.width = `30rem`;
        victory.play();

        if (score > highscore) {
            highscore = score;
            theHighscore.innerHTML = highscore
        }
    } else if (guess !== randomNumber) {
        if (score > 1) {
            guess > randomNumber ? theMessage.innerHTML = `too high` : theMessage.innerHTML = `too low`;
            score--;
            theScore.textContent = score;
            wrong.play();
        } else {
            theScore.textContent = 0;
            messageDelivery(theMessage, 'you lost')
        }
    }
});

btnAgain.addEventListener('click', function () {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    messageDelivery(theMessage, 'start guessing...');
    theScore.innerHTML = score;
    body.style.backgroundColor = `#333`;
    theNumber.style.width = '15rem';
    messageDelivery(theNumber, '?')
})

function messageDelivery(element, message) {
    return element.innerHTML = message;
}