"use strict"
let randomNum = Math.ceil(Math.random()*10);
let score = 20;
let highScore = 20;

const handleSubmit = () => {
  let guessedNum = Number(document.querySelector('#numInput').value);
 
  if(guessedNum === randomNum){
      score += 1;
      document.querySelector('#playerScore').textContent = score;
      document.querySelector('#highLowIndicator').textContent = 'YOU ARE CORRECT!'
      document.querySelector('#guessedNumber').textContent = randomNum;
      randomNum = Math.ceil(Math.random()*10);
      document.querySelector('body').style.backgroundColor = '#A9E2A5';
  }else if(guessedNum < randomNum){
    score -= 1;
    document.querySelector('#playerScore').textContent = score;
    document.querySelector('#highLowIndicator').textContent = 'You guessed low!'
    document.querySelector('#guessedNumber').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'rgb(223, 153, 153)';
  }else if(guessedNum > randomNum){
    score -= 1;
    document.querySelector('#playerScore').textContent = score;
    document.querySelector('#highLowIndicator').textContent = 'You guessed high!'
    document.querySelector('#guessedNumber').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'rgb(223, 153, 153)';
  }
  
  if (score < 1){
    document.querySelector('.active').className = 'notActive';
    document.querySelector('.notActive').className = 'active';
    document.querySelector('body').style.backgroundColor = '#7E808D';
  }
  if(score > highScore){
    highScore = score;
    document.querySelector('#highScore').textContent = highScore;
  }
}


document.querySelector('#submitButton').addEventListener('click', handleSubmit);
document.querySelector('#youLose').addEventListener('click',()=>window.location.reload());