'use strict';

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const number = document.querySelector('.number');
const data = document.getElementById('guess');

const buttonCheck = document.querySelector('.check')


message.textContent = 'correct Number!';
score.textContent = 40;
number.textContent = 2;

buttonCheck.addEventListener('click', function () {
    const guess = Number(document.getElementById('guess').value);
    console.log(guess, typeof guess);
    
    if (!guess) {
        message.textContent = 'enter input!!'
    }
})
