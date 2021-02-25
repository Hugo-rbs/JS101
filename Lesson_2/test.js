const readline = require('readline-sync');
const VALID_CHOICES = ['scissors', 'paper', 'rock', 'lizard', 'spock']

function prompt(message) {
  console.log(`=> ${message}`);
}


function userChoiceVerification(userChoice) {
  for (let choicesIdx = 0; choicesIdx < VALID_CHOICES.length; i++) {
    if (userChoice.toUpperCase() !== VALID_CHOICES[choicesIdx].toUpperCase() ||
    userChoice[0].toUpperCase() !== VALID_CHOICES[choicesIdx[0]].toUpperCase()) {
      return false;
    } 
  }
  return true;
}



prompt(`Please choose one:${VALID_CHOICES.join(', ')}`);
let userChoice = readline.question();

while (userChoiceVerification(userChoice)) {
  prompt('Please provide a valid choice' );
  let userChoice = readline.question()
}