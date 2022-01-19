"use strict"

let randomNum = Math.ceil(Math.random()*100);
console.log(randomNum);

const handleSubmit = () => {
  let guessedNum = Number(document.querySelector('#numInput').value);
  console.log(guessedNum);
  if(guessedNum === randomNum){
      console.log('congrats you guessed right');
  }else {
    console.log(`You guessed WRONG`)
  }
}

document.querySelector('.submitButton').addEventListener('click', handleSubmit);