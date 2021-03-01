const readline = require('readline-sync');
const VALID_CHOICES = ['scissors', 'paper', 'rock', 'lizard', 'spock']

function prompt(message) {
  console.log(`=> ${message}`);
}

function userChoiceValidation(userChoice) {

  for (let idx = 0; idx < VALID_CHOICES.length; idx ++) {
    if (userChoice === VALID_CHOICES[idx] || userChoice[0] === VALID_CHOICES[idx][0]) {
      return true;
    }
  } return false;
}


prompt(`Please choose one:${VALID_CHOICES.join(', ')}`);
let userChoice = readline.question();

while (!userChoiceValidation(userChoice)) {
  prompt('Please provide a valid choice' );
  userChoice = readline.question()
}
