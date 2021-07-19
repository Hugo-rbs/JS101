let board = 0;

function Updatescore(board) {

  if (detectWinner(board) === 'Player') {
    score.Player += 1;
  } else if (detectWinner(board) === 'Computer') {
    score.Computer += 1;
  }
}


