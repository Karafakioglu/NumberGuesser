let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(target, guess) {
  return Math.abs(target - guess);
}

function compareGuesses(playerGuess, computerGuess, targetGuess) {
  var compMutlakFark = getAbsoluteDistance(targetGuess, computerGuess);
  var humanMutlakFark = getAbsoluteDistance(targetGuess, playerGuess);
  if(playerGuess < 0 || playerGuess >9){
    alert("You entered an invalid number. Please choose a number between 1 and 9");
  }
  else
{  if (humanMutlakFark <= compMutlakFark) {
    return true;
  } else {
    return false;
  }}
}

function updateScore(winner) {
  winner ==="human" ? humanScore++ : computerScore++
}

function advanceRound() {
  currentRoundNumber ++;
}
