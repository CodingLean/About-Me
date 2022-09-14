'use strict';

console.log('Hello World *Lil Wayne Lighter flick*');

let visitorName = prompt('What is your name?');

alert(`Welcome to my site ${visitorName}! I have some questions for you..`);

let questionOneGuess = prompt('Have I Ever swam with Naked Dolphins?').toUpperCase();
console.log(questionOneGuess);
if(questionOneGuess === 'Y' || questionOneGuess === 'YES'){
  alert('Ok ok ok, you got lucky, homie!');
} else if(questionOneGuess === 'N' || questionOneGuess === 'NO'){
  alert('Guess again, Bucko.');
}





let questionTwoGuess = prompt('Am i an ex-Pilot?').toUpperCase();
console.log(questionTwoGuess);
if(questionTwoGuess === 'Y' || questionTwoGuess === 'YES'){
  alert('You spying on me ?');
} else if(questionTwoGuess === 'N' || questionTwoGuess === 'NO'){
  alert('I was flying for real, for real.. you are wrong.');
}

let questionThreeGuess = prompt('Do you think I am a parent?').toUpperCase();

if(questionThreeGuess === 'Y' || questionThreeGuess === 'YES'){
  console.log(questionThreeGuess);
  alert('Correct, Kiella and Santana.');
} else if(questionThreeGuess === 'N' || questionThreeGuess === 'NO'){
  alert('I mean you are wrong, but if you wants some i have two for sale?');
}

let questionFourGuess = prompt('Was I in the Navy?').toUpperCase();
console.log(questionFourGuess);
if(questionFourGuess === 'Y' || questionFourGuess === 'YES'){
  alert('I actually worked for a living. NO!');
} else if(questionFourGuess === 'N' || questionFourGuess === 'NO'){
  alert('You are wise, grasshopper!');
}

let questionFiveGuess = prompt('Do i want to work for Nike?').toUpperCase();

if(questionFiveGuess === 'Y' || questionFiveGuess === 'YES'){
  console.log(questionFiveGuess);
  alert('Yes, Nike is My dream job.. and i want free Nike gear.');
} else if(questionFiveGuess === 'N' || questionFiveGuess === 'NO'){
  alert('Who doesnt want free nike items? Wrong');
}















// alert(`Thanks for playing ${visitorName}`);
