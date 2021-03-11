const readline = require('readline-sync');
const WINNING_COMBOS = {
  scissors : {paper : 'cuts', lizard: 'disaproves'},
  rock : {scissors: 'crushes', lizard: 'crushes'},
  paper : {rock: 'covers', spock: 'disproves'},
  lizard : {spock: 'poisons', paper: 'eats'},
  spock : {scissors: 'smashes', rock: 'vaporizes'}
};

let userChoice = '';

prompt(`Please choose one: ${Object.keys(WINNING_COMBOS).join(', ')} (provide the full word or the first letter)`);
let userInput = readline.question().toLowerCase();
console.clear();

while (!userInputVerification()) {
  prompt('Please provide a valid choice.');
  userInput = readline.question();
}

// eslint-disable-next-line max-len
let randomIndex = Math.floor(Math.random() * Object.keys(WINNING_COMBOS).length);
let computerChoice = Object.keys(WINNING_COMBOS)[randomIndex];

displayWinner(userChoice, computerChoice);

// functions //

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
function userInputVerification() {
  return !!userInputConversion(userInput);
}

function userInputConversion(userInput) {
  let keys = Object.keys(WINNING_COMBOS);
  for (let idx = 0; idx < keys.length; idx++) {
    if (userInput === 's') {
      console.log('=> Please type "sc" for scissors, "sp" for spock');
      userInput = readline.question().toLowerCase();
      console.clear();
      userChoice = userInput + keys[idx].slice(2);
    } else if (userInput === keys[idx]) {
      userChoice = userInput;
    }  else if (userInput === keys[idx][0]) {
      userChoice = userInput + keys[idx].slice(1);
    } else if (userInput === keys[idx].slice(0, 2)) {
      userChoice = userInput + keys[idx].slice(2);
    }
  }
  return userChoice;
}
