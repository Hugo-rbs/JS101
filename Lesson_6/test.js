const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function displayBoard (board) {

  console.clear();

  console.log(`     |     |`);
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log(`     |     |`);
  console.log("");
}

function initializedBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

let board = initializedBoard();

displayBoard(board);

function boardFull(board) {
  return emptySquares(board).length <= 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

 let winningLines = [
   [1, 2, 3], [4, 5, 6], [7, 8, 9], // row
   [1, 4, 7], [2, 5, 8], [3, 6, 7], // columns
   [1, 5, 9], [3, 5, 7]
]
for (let idx = 0; idx < winningLines.length; idx += 1) {
  let [sq1, sq2, sq3] = winningLines[idx];

  if (
    board[sq1] === PLAYER_MARKER &&
    board[sq2] === PLAYER_MARKER &&
    board[sq3] === PLAYER_MARKER
    ) {
      return 'Player';
    } else if (
    board[sq1] === COMPUTER_MARKER &&
    board[sq2] === COMPUTER_MARKER &&
    board[sq3] === COMPUTER_MARKER
    ) {
      return computer;
    }
  }
  return null;
}

while (true) {
playerChooseSquare(board);
computerChoosesSquare(board);
displayBoard(board);
if (someoneWon(board) || boardFull(board)) break;
};

if (someoneWon(board)) {
  prompt(`${detectWinner(board)} won!`);
} else {
  prompt(`It's a tie`);
}

function prompt(message) {
  console.log(`==> ${message}`);
}
function emptySquares(board) {
  let emptySquares = Object.keys(board).filter(square => board[square] === ' ');
  return emptySquares;
}

function playerChooseSquare(board) {
  let square;
  while (true) {
    prompt(`Choose a square ${emptySquares(board).join(', ')}:`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) {
      break;
    }
    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = PLAYER_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}


