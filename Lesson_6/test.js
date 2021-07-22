// see Tictactoe part for elements worked on //

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

let roundsToPlay = WINNING_SCORE;

let score = {
  player : 0,
  computer : 0,
  tie: 0
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard (board) {
  console.clear();

  console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log("");
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

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChooseSquare(board) {
  let square;
  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) {
      break;
    }
    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = PLAYER_MARKER;
}

function computerChooseSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardIsFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let idx = 0; idx < WINNING_LINES.length; idx += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[idx];
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
  return null;
}

function joinOr(arr, delimiter1 = ', ', delimiter2 = 'or') {

  switch (arr.length) {
    case 0 : return '';
    case 1 : return String(arr[0]);
    case 2 : return arr.join(` ${delimiter2} `);
    default : return arr.slice(0, arr.length - 1).join(delimiter1) + `${delimiter1}${delimiter2} ${arr[arr.length - 1]}`;
  }

}

// BONUS - part 2 - score //

function keepingScore(board) {
  if (someoneWon(board) && detectWinner(board) === 'Player') {
    score.player += 1;
  } else if (someoneWon(board) && detectWinner(board) === 'Computer') {
    score.computer += 1;
  } else {
    score.tie += 1;
  }
}

function roundToPlay(board) {
  if (someoneWon(board)) {
    roundsToPlay -= 1;
  }
  console.log(`Rounds to play: ${roundsToPlay}`);
}

function resetScore() {
  for (let prop in score) {
    score[prop] = 0;
  }
  }

function resetRoundsToPlay() {
  roundsToPlay = WINNING_SCORE;
}

//^BONUS - part 2 - score ^//

while(true) {

  while (true) {

    let board = initializedBoard();

    while (true) {

      displayBoard(board);

      playerChooseSquare(board);
      if  (someoneWon(board) || boardIsFull(board)) {
        break;
      }

      computerChooseSquare(board);
      if  (someoneWon(board) || boardIsFull(board)) {
        break;
      }

    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} win the round!`);
    } else {
      prompt(`It's a tied`);
    }

    keepingScore(board);
    roundToPlay(board);
    console.log(`Score - Player: ${score.player} | Computer: ${score.computer} | Tie: ${score.tie}`);

    if (roundsToPlay === 0) {
      break;
    }

    prompt('Play next round? y/n');
    let anwser = readline.question().toLowerCase()[0];
    if (anwser !== 'y') {
      break;
    }
  }
  resetScore();
  resetRoundsToPlay();
  prompt('Play another game? y/n');
  let anwser = readline.question().toLowerCase()[0];
  if (anwser !== 'y') {
    break;
  }

}