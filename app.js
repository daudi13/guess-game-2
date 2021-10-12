'use strict';

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const data = document.getElementById('guess');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

buttonCheck.addEventListener('click', function () {
    const guess = Number(document.getElementById('guess').value);
    console.log(guess, typeof guess);
    
    if (!guess) {
        message.textContent = 'enter input!!'
    } else if (guess === secretNumber) {
        
    }

