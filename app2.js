//listing the elements

'use strict';

const buttonAgain = document.querySelector('.again');
const numbre = document.querySelector('.number');
const theMessage = document.querySelector('.message');
const theScore = document.querySelector('.score');
const theHighscore = document.querySelector('.highscore');
const buttonCheck = document.querySelector('.check');
const body = document.querySelector('body');


let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

buttonCheck.addEventListener('click', function () {
    const guess = Number(document.querySelector('input').value);

    if (!guess) {
        displayMessage(theMessage, 'Input value');
    } else if (guess === secretNumber) {
        displayMessage(theMessage, `You guessed right!`);
        displayMessage(numbre, secretNumber);
        body.style.backgroundColor = `green`;
        numbre.style.width = `30rem`

        if (score > highscore) {
            highscore = score;
            displayMessage(theHighscore, highscore);
        }
    } else if (guess !== secretNumber) {
        score--;
        theScore.innerHTML = score;
        if (score > 1) {
            guess > secretNumber ? displayMessage(theMessage, `too high`) : displayMessage(theMessage, `too low`);
        } else {
        displayMessage(theMessage, `You lost try again`);
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


function displayMessage(element, message) {
    return element.innerHTML = message;
}
