'use strict';

const message = document.querySelector('.message');
const data = document.getElementById('guess');
const buttonCheck = document.querySelector('.check');
const theScore = document.querySelector('.score');
const theNumbre = document.querySelector('.number');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

buttonCheck.addEventListener('click', function () {
    const guess = Number(document.getElementById('guess').value);
    console.log(guess, typeof guess);
    
    if (!guess) {
        message.textContent = 'enter input!!'
    } else if (guess === secretNumber) {
        score++;
        theScore.textContent = score;
        message.textContent = `Correct Number!`;
        theNumbre.textContent = secretNumber;

    } else if (guess !== secretNumber) {
        score--;
        theScore.textContent = score;

        if (guess > secretNumber) {
            message.textContent = `too high`;
        } else if (guess < secretNumber) {
            message.textContent = `too low`;
        }
    }

});