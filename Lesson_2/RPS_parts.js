const readline = require('readline-sync');

// const WINNING_COMBOS = {
//   scissors : {paper : 'cuts', lizard: 'disaproves'},
//   rock : {scissors: 'crushes', lizard: 'crushes'},
//   paper : {rock: 'covers', spock: 'disproves'},
//   lizard : {spock: 'poisons', paper: 'eats'},
//   spock : {scissors: 'smashes', rock: 'vaporizes'}
// };

// const WINNING_SCORE = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}


// function to validate user's input  - word or 1st letter //

// function userChoiceValidation(userChoice) {
// let keys = Object.keys(WINNING_COMBOS);
//   for (let idx = 0; idx < keys.length ; idx ++) {
//   if (userChoice === keys[idx] || userChoice[0] === keys[idx][0]) {
//       return true;
//     }
//   } return false;
// }

// userChoice validation //

// while (!userChoiceValidation(userChoice)) {
//   prompt('Please provide a valid choice' );
//   userChoice = readline.question()
// }

// random choice for the computer //

// let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
// let computerChoice = VALID_CHOICES[randomIndex];

// finding out the winner //

// function userWins(userChoice, computerChoice) {
//   return Object.keys(WINNING_COMBOS[userChoice]).includes(computerChoice);
// }


// function computerWins(userChoice, computerChoice) {
//   return Object.keys(WINNING_COMBOS[computerChoice]).includes(userChoice);
// }


// let keys = Object.keys(WINNING_COMBOS);

// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[0].slice(0,2))
// }

// eslint-disable-next-line max-len
// user choice validation - works with full word, first letter or two first letters //

// function userChoiceValidation(userChoice) {
//   let keys = Object.keys(WINNING_COMBOS);
//   for (let idx = 0; idx < keys.length; idx++) {
//     if (userChoice === keys[idx] || userChoice[0] === keys[idx][0]
//         || userChoice.slice(0,2) === keys[idx].slice(0,2)) {
//       return true;
//     }
//   }
//   return false;
// }

// function userChoice(userInput) {
//   let userChoice = '';
//   let keys = Object.keys(WINNING_COMBOS);
//   for (let idx = 0; idx < keys.length; idx++) {
//     if (userInput === keys[idx]) {
//       userChoice = userInput;
//     } else if (userInput === keys[idx][0]) {
//       userChoice = userInput + keys[idx].slice(1);
//     } else if (userInput === keys[idx].slice(0,2)) {
//       userChoice = userInput + keys[idx].slice(2);
//     }
//   }
//   return userChoice;
// }

// console.log(userChoice('sc'));

// eslint-disable-next-line max-lines-per-function

// prompt('Please make a choice:');
// let userInput = readline.question().toLowerCase();

// function userInputConversion(userInput) {
//   let userChoice = '';
//   let keys = Object.keys(WINNING_COMBOS);
//   for (let idx = 0; idx < keys.length; idx++) {
//     if (userInput === 's') {
//       console.log('=> Please type "sc" for scissors, "sp" for spock');
//       userInput = readline.question().toLowerCase();
//       userChoice = userInput + keys[idx].slice(2);
//     } else if (userInput === keys[idx]) {
//       userChoice = userInput;
//     }  else if (userInput === keys[idx][0]) {
//       userChoice = userInput + keys[idx].slice(1);
//     } else if (userInput === keys[idx].slice(0, 2)) {
//       userChoice = userInput + keys[idx].slice(2);
//     }
//   }
//   return userChoice;
// }


// function userInputVerification(userInput) {
//   if (userInputConversion(userInput)) {
//     return true;
//   } prompt('Please provide a valid choice.');
//   userInput = readline.question();
// }

// while (!userInputVerification()) {
//   prompt('Please provide a valid choice.');
//   userInput = readline.question();
// }

// function display winner with the socre incrementation added //

// function displayWinner(userChoice, computerChoice) {
//   prompt(`You choose: ${userChoice}, computer choose: ${computerChoice}`);
//   if (userWins(userChoice, computerChoice)) {
//     prompt('You win!');
//     currentScore(1);
//   } else if (computerWins(userChoice, computerChoice)) {
//     prompt('Computer wins!');
//     currentScore(0);
//   } else {
//     prompt("It's a tie");
//   }
// }


// let playerScore = 5;
// let computerScore = 0;

// function currentScore(score) {
//   if (score) {
//     userScore += 1;
//   } else {
//     computerScore += 1;
//   }
// }

// function grandWinner(player1, player2) {
//   if (player1 === WINNING_SCORE || player2 === WINNING_SCORE) {
//     return true;
//   } return false
// }

// currentScore(0);

// console.log(`User score: ${userScore} - Computer score: ${computerScore}`);

// while (!grandWinner(playerScore, computerScore)) {


// }

// grandWinner(player1, player2)


// function bestOfFive (player1, player2) {
//   return player1 ===  WINNING_SCORE || player2 === WINNING_SCORE;
// }

// function displayGrandWinner() {
//   while (bestOfFive()) {
//     if (playerScore > computerScore) {
//       console.log('You win!');
//     } else {
//       console.log('computer wins');
//     }
//   }
// }

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

while (true) {
  rpsWelcome();

  prompt('Press any key to start the game, x to exit');
  let start = readline.question().toLowerCase();

  if (start === 'x') {
    break;
  }
}