/* eslint-disable max-len */
const readline = require('readline-sync');
const WINNING_COMBOS = {
  scissors : {paper : 'cuts', lizard: 'disaproves'},
  rock : {scissors: 'crushes', lizard: 'crushes'},
  paper : {rock: 'covers', spock: 'disproves'},
  lizard : {spock: 'poisons', paper: 'eats'},
  spock : {scissors: 'smashes', rock: 'vaporizes'}
};
const WINNING_SCORE = 5;

let playerScore = 0;
let computerScore = 0;

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
    currentScore(1);
  } else if (computerWins(userChoice, computerChoice)) {
    prompt('Computer wins!');
    currentScore(0);
  } else {
    prompt("It's a tie");
  }
}

function currentScore(score) {
  if (score) {
    playerScore += 1;
  } else {
    computerScore += 1;
  }
}

function displayScore() {
  console.log(`Player score: ${playerScore} | Computer score: ${computerScore}`);
}

function grandWinner(player1, player2) {
  if (player1 === WINNING_SCORE) {
    console.log('You win the game!');
  } else if (player2 === WINNING_SCORE) {
    console.log(`The computer wins the game`);
  }
}

function userInputConversion(Input) {
  let keys = Object.keys(WINNING_COMBOS);
  let userChoice = '';
  for (let idx = 0; idx < keys.length; idx++) {
    if (Input === 's') {
      console.log('=> Please type "sc" for scissors, "sp" for spock');
      Input = readline.question().toLowerCase();
      console.clear();
      userChoice = Input + keys[idx].slice(2);
    } else if (Input === keys[idx]) {
      userChoice = Input;
    }  else if (Input === keys[idx][0]) {
      userChoice = Input + keys[idx].slice(1);
    } else if (Input === keys[idx].slice(0, 2)) {
      userChoice = Input + keys[idx].slice(2);
    }
  }
  return userChoice;
}

// code //

while (!grandWinner(playerScore, computerScore)) {
  prompt(`Please choose one: ${Object.keys(WINNING_COMBOS).join(', ')} (provide the full word or the first letter)`);
  let userInput = userInputConversion(readline.question().toLowerCase());
  console.clear();


  while (!Object.keys(WINNING_COMBOS).includes(userInput)) {
    prompt("Please provide a valid choice");
    userInput = userInputConversion(readline.question().toLowerCase());
  }

  // eslint-disable-next-line max-len
  let randomIndex = Math.floor(Math.random() * Object.keys(WINNING_COMBOS).length);
  let computerChoice = Object.keys(WINNING_COMBOS)[randomIndex];

  displayWinner(userInput, computerChoice);
  displayScore();
}
console.clear();

grandWinner(playerScore, computerScore);
