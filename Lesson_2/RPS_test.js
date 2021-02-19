const readline = require('readline-sync');
const VALID_CHOICES = ['Rock', 'Paper', 'Scissors'];
let again;

function displayWinner(choice, computerChoice) {
  if (choice === 'Rock' && computerChoice === 'Scissors') {
    console.log('You win!');
  } else if (choice === 'Paper' && computerChoice === 'Rock') {
    console.log('You win!');
  } else if (choice === 'Scissors' && computerChoice === 'Paper') {
    console.log('You win!');
  } else if (choice === computerChoice) {
    console.log('It\'s a tie');
  } else {
    console.log('The computer wins');
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    console.log('Please provide a valid choice.');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You choose: ${choice}, the computer choose: ${computerChoice}`);

  displayWinner();

  prompt(`Would you like to play another game? Y/N`);
  again = readline.question();

} while (again[0] === 'Y'.toUpperCase());
