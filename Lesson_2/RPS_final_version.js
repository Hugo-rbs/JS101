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

function prompt(message) {
  console.log(`=> ${message}`);
}

function rpsWelcome() {
  let welcomeMessage = 'Welcome to the Rock Paper Scissors game!';
  let horizontalRule = `+${'-'.repeat(welcomeMessage.length + 2)}+`;
  let verticalRule = `|${' '.repeat(welcomeMessage.length + 2)}|`;
  console.log(horizontalRule);
  console.log(verticalRule);
  console.log(`| ${welcomeMessage} |`);
  console.log(verticalRule);
  console.log(horizontalRule);
}

function userInputConversion(Input) {
  let keys = Object.keys(WINNING_COMBOS);
  let verifiedInput = '';
  for (let idx = 0; idx < keys.length; idx++) {
    if (Input === 's') {
      console.log('=> Please type "sc" for scissors, "sp" for spock');
      Input = readline.question().toLowerCase();
      console.clear();
      verifiedInput = Input + keys[idx].slice(2);
    } else if (Input === keys[idx]) {
      verifiedInput = Input;
    }  else if (Input === keys[idx][0]) {
      verifiedInput = Input + keys[idx].slice(1);
    } else if (Input === keys[idx].slice(0, 2)) {
      verifiedInput = Input + keys[idx].slice(2);
    }
  }
  return verifiedInput;
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

function bestOfFive () {
  return playerScore ===  WINNING_SCORE || computerScore === WINNING_SCORE;
}

function displayGrandWinner() {
  while (bestOfFive()) {
    if (playerScore > computerScore) {
      console.log('You win the game!');
      break;
    } else {
      console.log('computer wins the game');
      break;
    }
  }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}


rpsWelcome();
prompt('Press any key to start the game, x to exit');
let start = readline.question().toLowerCase();


while (start !== 'x') {
  console.clear();
  while (true) {
    prompt(`Please choose one: ${Object.keys(WINNING_COMBOS).join(', ')} (provide the full word or the first letter)`);
    let userChoice = userInputConversion(readline.question().toLowerCase());
    console.clear();


    while (!Object.keys(WINNING_COMBOS).includes(userChoice)) {
      prompt("Please provide a valid choice");
      userChoice = userInputConversion(readline.question().toLowerCase());
    }

    // eslint-disable-next-line max-len
    let randomIndex = Math.floor(Math.random() * Object.keys(WINNING_COMBOS).length);
    let computerChoice = Object.keys(WINNING_COMBOS)[randomIndex];

    displayWinner(userChoice, computerChoice);
    displayScore();
    displayGrandWinner();

    if (bestOfFive()) {
      prompt('Would you like to play another round? (y/n)');
      let answer = readline.question().toLowerCase();

      while (answer[0] !== 'n' && answer[0] !== 'y') {
        prompt('Please enter "y" or "n".');
        answer = readline.question().toLocaleLowerCase();
      }
      if (answer[0] !== 'y') break;

      resetScore();
      console.clear();
    }
  }
  if (start === 'x') break;
}