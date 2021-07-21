const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_COMBOS = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'],
  ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];


function displayBoard(board) {

  console.log('');

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

  console.log('');

}


function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square += 1) {
    board[square] = INITIAL_MARKER;
  }
  return board;
}

function initializeScore() {

  let score = {
    Player : 0,
    Computer : 0,
  }
  return score;
}

function updateScore(board, WINNING_COMBOS) {
  if (someoneWon(board, WINNING_COMBOS) && (detectWinner(board, WINNING_COMBOS) === 'Player')) {
    score.Player += 1;
  } else if  (someoneWon(board, WINNING_COMBOS) && (detectWinner(board, WINNING_COMBOS) === 'Computer')) {
    score.computer += 1;
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function userChooseSquare(board) {
  let square;
  while (true) {
    prompt(`Please choose a square ${emptySquares(board).join(' ,')}:`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) {
      break;
    }
    prompt('Sorry this is not a valid choice');
  }
  board[square] = PLAYER_MARKER;
}

function computerChooseSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function isBoardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board, WINNING_COMBOS) {
return !!detectWinner(board, WINNING_COMBOS);
}

function detectWinner(board, WINNING_COMBOS) {
  for (let idx = 0; idx < WINNING_COMBOS.length; idx += 1) {
    let [sq1, sq2, sq3] = WINNING_COMBOS[idx];
    if (board[sq1] === PLAYER_MARKER &&
        board[sq2] === PLAYER_MARKER &&
        board[sq3] === PLAYER_MARKER) {
          return 'Player';
        } else if (board[sq1] === COMPUTER_MARKER &&
                   board[sq2] === COMPUTER_MARKER &&
                   board[sq3] === COMPUTER_MARKER) {
                     return 'Computer';
                   }
  }
}

while (true) {

  let board = initializeBoard();
  let score = {
    Player : 0,
    Computer: 0,
  }

  while (true) {
    displayBoard(board);
    console.log(`Player: ${score.Player} | Computer ${score.Computer}`);
    userChooseSquare(board);
    computerChooseSquare(board);
    

    if (someoneWon(board, WINNING_COMBOS) || isBoardFull(board)) {
      console.log(`${detectWinner(board, WINNING_COMBOS)} won!`);
      break;
    }
    updateScore(board, WINNING_COMBOS);
    console.clear();
  }
}