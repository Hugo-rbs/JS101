const readline = require('readline-sync');
const VALID_CHOICES = ['scissors', 'paper', 'rock', 'lizard', 'spock'];
const WINNING_COMBOS = {
  scissors : {paper : 'cuts', lizard: 'disaproves'},
  rock : {scissors: 'crushes', lizard: 'crushes'},
  paper : {rock: 'covers', spock: 'disproves'},
  lizard : {spock: 'poisons', paper: 'eats'},
  spock : {scissors: 'smashes', rock: 'vaporizes'}
};


function prompt(message) {
  console.log(`=> ${message}`);
}

function userWins(userChoice, computerChoice) {
  return Object.keys(WINNING_COMBOS[userChoice]).includes(computerChoice); 
}

function computerWins(userChoice, computerChoice) {
  return Object.keys(WINNING_COMBOS[computerChoice]).includes(userChoice);
}

function displayWinner(userChoice, computerChoice) {
  prompt(`You choose: ${userChoice}, computer choose: ${computerChoice}`);
  if (userWins(userChoice, computerChoice)) {
    prompt('You win!');
  } else if (computerWins(userChoice, computerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

prompt(`Please choose one: ${VALID_CHOICES.join(', ')}`);
let userChoice = readline.question();
console.clear()


let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

displayWinner(userChoice, computerChoice);