// Need to do the second and third bonus assignment 
// Need to find a way to change or make the functions /userWin and /computerWin shorter 

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];


function userWin(choice, computerChoice) {

  if ((choice === 'rock' && computerChoice === 'scissors') ||
 (choice === 'paper' && computerChoice === 'rock') ||
 (choice === 'scissors' && computerChoice === 'paper') ||
 (choice === 'rock' && computerChoice === 'lizard') ||
 (choice === 'lizard' && computerChoice === 'spock') ||
 (choice === 'spock' && computerChoice === 'scissors') ||
 (choice === 'scissors' && computerChoice === 'lizard') ||
 (choice === 'lizard' && computerChoice === 'paper') ||
 (choice === 'paper' && computerChoice === 'spock') ||
 (choice === 'spoke' && computerChoice === 'rock')) return 1;
}

function computerWins(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'paper') ||
 (choice === 'paper' && computerChoice === 'scissors') ||
 (choice === 'scissors' && computerChoice === 'rock') ||
 (choice === 'lizard' && computerChoice === 'rock') ||
 (choice === 'spock' && computerChoice === 'lizard') ||
 (choice === 'scissors' && computerChoice === 'spock') ||
 (choice === 'lizard' && computerChoice === 'scissors') ||
 (choice === 'paper' && computerChoice === 'lizard') ||
 (choice === 'spock' && computerChoice === 'paper') ||
 (choice === 'rock' && computerChoice === 'spock')) return -1;
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