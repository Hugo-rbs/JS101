const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const WINNING_COMBOS = {
  scissors : {paper : 'cuts', spock: 'disaproves'},
  rock : {scissors: 'crushes', lizard: 'crushes'},
  paper : {rock: 'covers', spock: 'disproves'},
  lizard : {spock: 'poisons', paper: 'eats'},
  spock : {scissors: 'smashes', rock: 'vaporizes'}
};

function userWin(choice, computerChoice) {
  return Object.keys(WINNING_COMBOS[choice]
    .includes(WINNING_COMBOS[computerChoice]));
}

function computerWins(choice, computerChoice) {
  return Object.keys(WINNING_COMBOS[computerChoice]
    .includes(WINNING_COMBOS[choice]));
}

function displayWinner(choice, computerChoice) {
  prompt(`You choose: ${choice}, computer choose: ${computerChoice}`);
  if (userWin(choice, computerChoice) ||
  !computerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (!userWin(choice, computerChoice) ||
  computerWins(choice, computerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

do {
  prompt(`Please choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.ceil(Math.random() * (VALID_CHOICES.length - 1));
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);


  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please enter 'y` or 'n'.");
    answer = readline.question.toLowerCase();
  }

  if (answer[0] !== 'y') break;
}  while (true);


