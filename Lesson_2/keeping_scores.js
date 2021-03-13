const WINNING_SCORE = 5;

let playerScore = 0;
let computerScore = 0;

function currentScore(score) {
  if (score) {
    playerScore += 1;
  } else {
    computerScore += 1;
  }
}

function grandWinner(userscore, computerscore) {
  if (userscore === WINNING_SCORE) {
    console.log('You win the game!');
  } else if (computerscore === WINNING_SCORE) {
    console.log(`The computer wins the game`);
  }
}

currentScore(0);
console.log(playerScore + '|' + computerScore);
grandWinner(playerScore, computerScore);


