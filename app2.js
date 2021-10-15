//listing the elements

'use strict';

const buttonAgain = document.querySelector('.again');
const numbre = document.querySelector('.number');
const theMessage = document.querySelector('.message');
const theScore = document.querySelector('.score');
const theHighscore = document.querySelector('.highscore');
const buttonCheck = document.querySelector('.check');
const body = document.querySelector('body')


let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

buttonCheck.addEventListener('click', function () {
    const guess = Number(document.querySelector('input').value);

    if (!guess) {
        theMessage.innerHTML = 'Input value';
    } else if (guess === secretNumber) {
        theMessage.innerHTML = `You guessed right!`;
        numbre.innerHTML = secretNumber;
        body.style.backgroundColor = `green`;
        numbre.style.width = `30rem`

        if (score > highscore) {
            highscore = score;
            theHighscore.innerHTML = highscore;
        }
    } else if (guess !== secretNumber) {
        score--;
        theScore.innerHTML = score;
        if (score > 1) {
            guess > secretNumber ? theMessage.innerHTML = `too high` : theMessage.innerHTML = `too low`;
        } else {
            theMessage.innerHTML = `You lost try again`;
            theScore.textContent = 0;
        }
    }

    console.log(secretNumber);
});

buttonAgain.addEventListener('click', function () {
    theMessage.innerHTML = `start Guessing...`;
    score = 20;
    theScore.innerHTML = score
    numbre.innerHTML = `?`;
    document.querySelector('input').value = ``;
})



