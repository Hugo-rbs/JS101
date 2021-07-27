const readline = require('readline-sync');

const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const INITIAL_MARKER = ' ';
const WINNING_SCORE = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7] // diagonals
];

function initializeScore() {

  let score = {
    player : 0,
    computer : 0,
    tie: 0,
    roundsToPlay : WINNING_SCORE
  };

function displayScore() {
  console.log(`Rounds to play: ${score.roundsToPlay}\nScore - Player: ${score.player} | Computer: ${score.computer} | Tie: ${score.tie}`);
}

while (true) {
  initializeScore();
  displayScore();
}