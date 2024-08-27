'use strict';

let secretnumber = Math.trunc(Math.random() * 100 + 1)
let score = 10;
let highscore = 0;

function displaymessage(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector(".check").addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ not guess ?'

    } else if (guess === secretnumber) {
        displaymessage('🎉 correct number')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem'
        document.querySelector('.number').textContent = secretnumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== secretnumber) {
        if (score > 1) {
            if(guess >= 1 && guess <=100){
            displaymessage(guess > secretnumber ? `❌ ${guess} is high` : `❌ ${guess} is low`)
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.guess').value = ''

        }else{
            displaymessage('⛔ Not Valid Range!')
        }
    }
        else {
            document.querySelector('.score').textContent = ` ${score-1} : 🔥 You lost the game `;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretnumber = Math.trunc(Math.random() * 100) + 1;
    displaymessage('Starting guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

