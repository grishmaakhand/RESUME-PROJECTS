'use strict';

/*

//code for L70

console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

*/

//code for L72

/*
//to select nd set value 
document.querySelector('.message').textContent = '🎉Correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 5;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
// we are using value because the type of guess class is input type and we can see 
//the value on console 

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //no input
  if (!guess) {
    displayMessage(' No number!');
  }

  //correct number
  else if (secretNumber === guess) {
    displayMessage('🎉Correct number');
    document.querySelector('.number').textContent = secretNumber;

    //style in js
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //wrong input
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'to high' : 'to low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('loss the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//to low
// else if (secretNumber > guess) {
//   if (score > 1) {
//     displayMessage('to low');
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     displayMessage('loss the game');
//     document.querySelector('.score').textContent = 0;
//   }
// }
//to high
//   else if (secretNumber < guess) {
//     if (score > 1) {
//       displayMessage('to high');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('loss the game');
//       document.querySelector('.score').textContent = 0;
//     }
//   }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
