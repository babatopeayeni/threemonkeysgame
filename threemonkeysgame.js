let score =  JSON.parse(localStorage.getItem('score'));
//score displayed in console
// if(score === null) or below;
if (!score) {
score= {
wins:0,
losses:0,
ties:0, 
}
}

function playGame(humanMove) {

let computerChoice  = computerMove();

let result ='';
if(humanMove === 'See No Evil') {

if (computerChoice === 'See No Evil'){
result = 'Its Tie';
} else if(computerChoice === 'Hear No Evil'){
result ='You Lose';
} else if (computerChoice === 'Speak No Evil'){
result = 'You Win';
}
}
if(humanMove === 'Hear No Evil') {

if (computerChoice === 'See No Evil'){
result = 'You Lose';
} else if(computerChoice === 'Hear No Evil'){
result ='Its a Tie';
} else if (computerChoice === 'Speak No Evil'){
result = 'You Win!';
}
}
if(humanMove === 'Speak No Evil') {

if (computerChoice === 'See No Evil'){
result = 'You Win!';
} else if(computerChoice === 'Hear No Evil'){
result ='You Lose';
} else if (computerChoice === 'Speak No Evil'){
result = 'Its a Tie';
}
}
if( result ==='You Win!'){
score.wins = score.wins + 1;
}else if( result ==='You Lose'){
score.losses = score.losses + 1;
}else if( result ==='Its a Tie'){
score.ties = score.ties + 1;
}

// set to Local storage
 // const scoretoString = JSON.stringify(score); // convert score to string
 updateScoreElement();
localStorage.setItem('score',JSON.stringify(score)); 
//score displayed in console
document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-pick').innerHTML = `Computer picked: ${computerChoice} | You picked: ${humanMove}.`; 


}
function updateScoreElement(){
document.querySelector('.js-score').innerHTML = ` The scores: Win ${score.wins}, Lose: ${score.losses}, Tie: ${score.ties}`;
}


function computerMove(){

let computerChoice = '';
const randomNumber = Math.random();

if (randomNumber >= 0 && randomNumber < 1/3){
computerChoice = 'See No Evil';
}else if (randomNumber >=1/3 && randomNumber < 2/3){
computerChoice = 'Hear No Evil';
} else if (randomNumber >= 2/3 && randomNumber < 1){
computerChoice ='Speak No Evil';
}
return computerChoice;
}

