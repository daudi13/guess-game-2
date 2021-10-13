'use strict';

const message = document.querySelector('.message');
const data = document.getElementById('guess');
const theScore = document.querySelector('.score');
const theNumbre = document.querySelector('.number');
const theHighscore = document.querySelector('.highscore');
const buttonCheck = document.querySelector('.check');
const buttonAgain = document.querySelector('.again');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

buttonCheck.addEventListener('click', function () {
    const guess = Number(document.getElementById('guess').value);
    console.log(guess, typeof guess);
    
    if (!guess) {
        message.textContent = 'enter input!!'
    } else if (guess === secretNumber) {
        score++;
        theScore.textContent = score;
        message.textContent = `Correct Number!`;

        //unveiling the answer;
        theNumbre.textContent = secretNumber;

        //adding up the  cumulative highscore

        highScore = highScore + 5;
        theHighscore.textContent = highScore;

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

buttonAgain.addEventListener('click', function () {
    //resetting the score back to the initial value;
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;


    //resetting the input back to '';
    const guess = document.getElementById('guess');
    guess.value = '';

})