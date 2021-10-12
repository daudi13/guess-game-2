'use strict';

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const number = document.querySelector('.number');
const data = document.getElementById('guess');

const number = Math.trunc(Math.random() * 20) + 1;

buttonCheck.addEventListener('click', function () {
    const guess = Number(document.getElementById('guess').value);
    console.log(guess, typeof guess);
    
    if (!guess) {
        message.textContent = 'enter input!!'
    }
})
