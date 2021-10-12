'use strict';

const message = document.querySelector('.message');
const data = document.getElementById('guess');
const buttonCheck = document.querySelector('.check');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20

buttonCheck.addEventListener('click', function () {
    const guess = Number(document.getElementById('guess').value);
    console.log(guess, typeof guess);
    
    if (!guess) {
        message.textContent = 'enter input!!'
    } else if (guess === secretNumber) {
        message.textContent = `Correct Number!`;
    } else if (guess !== secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;

        if (guess > secretNumber) {
            message.textContent = `too high`;
        } else if (guess < secretNumber) {
            message.textContent = `too low`;
        }
    }

});