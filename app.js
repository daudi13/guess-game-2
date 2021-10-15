'use strict';

const message = document.querySelector('.message');
const data = document.getElementById('guess');
const theScore = document.querySelector('.score');
const theNumbre = document.querySelector('.number');
const theHighscore = document.querySelector('.highscore');
const buttonCheck = document.querySelector('.check');
const buttonAgain = document.querySelector('.again');
const victory = document.getElementById('victory');
const wrong = document.getElementById('wrong');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

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
        document.querySelector('body').style.backgroundColor = 'green';
        theNumbre.style.width = '30rem';

        //unveiling the answer;
        theNumbre.textContent = secretNumber;

        //adding up the  cumulative highscore

        /*
        highScore = highScore + score;
        theHighscore.textContent = highScore;
        */
        
        if (score > highScore) {
            highScore = score
            theHighscore.textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        score--;
        theScore.textContent = score;

        if (guess > secretNumber) {
            message.textContent = `too high`;
        } else if (guess < secretNumber) {
            message.textContent = `too low`;
        }
    }

    if (score < 1) {
        message.textContent = 'you lost';
        score = 0;
    }

});

buttonAgain.addEventListener('click', function () {
    //resetting the score back to the initial value;
    score = 20;
    theScore.textContent = score;
    //resetting the background;

    document.querySelector('body').style.backgroundColor = '#222';


    //resetting the input back to '';
    const guess = document.getElementById('guess');
    guess.value = '';

    //resetting the message;
    message.textContent = 'start guessing';

    //resetting the number to question mark;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    theNumbre.textContent = `?`;

    //resetting the width of the  
    theNumbre.style.width = '15rem'

}); 