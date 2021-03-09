const readline = require('readline-sync');
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


function userChoiceValidation(userChoice) {
  let keys = Object.keys(WINNING_COMBOS);
  for (let idx = 0; idx < keys.length; idx++) {
    if (userChoice === keys[idx] || userChoice[0] === keys[idx][0]
        || userChoice.slice(0,2) === keys[idx].slice(0,2)) {
      return true;
    }
  }
  return false;
}

function userChoice(userInput) {
  let userChoice = '';
  let keys = Object.keys(WINNING_COMBOS);
  for (let idx = 0; idx < keys.length; idx++) {
    if (userInput === keys[idx]) {
      userChoice = userInput;
    } else if (userInput === keys[idx][0]) {
      userChoice = userInput + keys[idx].slice(1);
    } else if (userInput === keys[idx].slice(0,2)) {
      userChoice = userInput + keys[idx].slice(2);
    }
  }
  return userChoice;
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

prompt(`Please choose one: ${Object.keys(WINNING_COMBOS).join(', ')} (provide the full word or the first letter)`);
let userChoice = readline.question();
console.clear();

if (userChoice === 's') {
  prompt('Did you mean scissors or spock? Please type your anwser');
  userChoice = readline.question();
}

while (!userChoiceValidation(userChoice)) {
  prompt('Please provide a valid choice' );
  userChoice = readline.question();
}

// eslint-disable-next-line max-len
let randomIndex = Math.floor(Math.random() * Object.keys(WINNING_COMBOS).length);
let computerChoice = Object.keys(WINNING_COMBOS)[randomIndex];

displayWinner(userChoice, computerChoice);