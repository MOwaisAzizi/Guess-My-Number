'use strict';
let secretnumber = Math.trunc(Math.random() * 100 + 1)
let score = 10;
let highscore = 0;
// document.querySelector('.number').textContent = secretnumber
function displaymessage(message) {//for refectoring we can do it for all repeated data
    document.querySelector('.message').textContent = message
}
document.querySelector(".check").addEventListener('click', function () {
    var guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ not guess ?'

    } else if (guess === secretnumber) {
        //  document.querySelector('.message').textContent = ' 🎉 correct number'
        displaymessage(' 🎉 correct number')
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
            // document.querySelector('.message').textContent = guess > secretnumber ? ' too high 👆' : ' too low 👇'
            displaymessage(guess > secretnumber ? ' too high 👆' : ' too low 👇')
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = ' 0 🔥 you lost the game ';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
})
document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Starting guess...'
    displaymessage('Starting guess...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

