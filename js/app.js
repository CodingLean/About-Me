'use strict';

console.log('Hello World *Lil Wayne Lighter flick*');

function introAlf(){

let visitorName = prompt('What is your name?');

alert(`Sak pase ${visitorName}! lets play a game..`);
}

introAlf();

let userPoints = 0;

function introBalf(){

let questionOneGuess = prompt('Have I Ever swam with Naked Dolphins?').toUpperCase();
console.log(questionOneGuess);
if(questionOneGuess === 'Y' || questionOneGuess === 'YES'){
  alert('Ok ok ok, you got lucky, homie!');
  userPoints++;
} else if(questionOneGuess === 'N' || questionOneGuess === 'NO'){
  alert('Guess again, Bucko.');
}
}

introBalf();

function introCalf(){

let questionTwoGuess = prompt('Am i an ex-Pilot?').toUpperCase();
console.log(questionTwoGuess);
if(questionTwoGuess === 'Y' || questionTwoGuess === 'YES'){
  alert('You spying on me ?');
  userPoints++;
} else if(questionTwoGuess === 'N' || questionTwoGuess === 'NO'){
  alert('I was flying for real, for real.. you are wrong.');
}

}

introCalf();

function introDalf(){

let questionThreeGuess = prompt('Do you think I am a parent?').toUpperCase();

if(questionThreeGuess === 'Y' || questionThreeGuess === 'YES'){
  console.log(questionThreeGuess);
  alert('Correct, Kiella and Santana.');
  userPoints++;
} else if(questionThreeGuess === 'N' || questionThreeGuess === 'NO'){
  alert('I mean you are wrong, but if you wants some i have two for sale?');
}

}

introDalf();


function introFalf(){

let questionFourGuess = prompt('Was I in the Navy?').toUpperCase();
console.log(questionFourGuess);
if(questionFourGuess === 'Y' || questionFourGuess === 'YES'){
  alert('I actually worked for a living. NO!');
} else if(questionFourGuess === 'N' || questionFourGuess === 'NO'){
  alert('You are wise, grasshopper!');
  userPoints++;
}
}

introFalf();


function introGalf(){
  
let questionFiveGuess = prompt('Do i want to work for Nike?').toUpperCase();

if(questionFiveGuess === 'Y' || questionFiveGuess === 'YES'){
  console.log(questionFiveGuess);
  alert('Yes, Nike is My dream job.. and i want free Nike gear.');
  userPoints++;
} else if(questionFiveGuess === 'N' || questionFiveGuess === 'NO'){
  alert('Who doesnt want free nike items? Wrong');
}
}

introGalf();


function introHalf(){

let attempts = 4;
while(attempts > 0 ){
  let questionSixGuess = prompt('Whats my favorite number? 1-20');
  attempts--;
  if(parseInt(questionSixGuess) === 17){
    console.log(questionSixGuess);
    alert('Yes, 17 means alot to me.');
    userPoints++;
    break;
    
  } else if(questionSixGuess < 17){
    alert('As Chief Keef would say "NAH" too low');
  }
  else if(questionSixGuess > 17){
    alert('As Chief Keef would say "NAH" too high');
  }
  if(attempts === 0 ){
    alert('My favorite number is 17.');
  }
}
}

introHalf();


function introIalf(){

const shoes = ['nike cortez', ' jordan retro 1', ' jordan retro 5', ' jordan retro 11', 'adidas yeezy', 'rebook ai questions', 'jordan retro 4'];



let numTrys = 0;
let correct = false;

while (numTrys < 6 && correct === false) {
  let questionSevenguess = prompt('Name a brand of shoes in my top 10').toLowerCase();
  for (let i = 0; i < shoes.length; i++) {
    if (shoes[i] === questionSevenguess) {
      alert(`Dont think you know me because you are right! Heres my whole list: ${shoes}.`);
      correct = true;
      userPoints++;
      break;
    }
  }
  numTrys++;
  if (correct === false) {
    alert('Negative Ghostrider, that was not one of them');
  }
}
if (correct === false) {
  alert(`Geez get it together, heres my list ${shoes}.`);
}
}

introIalf();

{
  alert(`Thanks for taking my quiz, ${visitorName}. Your score was ${userPoints} out of 7`);}

