// working on...//
/*
Computer AI - Defense

goal : instead of having the computer randomly pick up a square, it should check for immediate threats and defend accordingly.
An immediate threat occurs when the player has already 2 squares in a row and the 3rd one is unoccupied. 

1.Check what squares were already marked by the player
2. If the squares that were already marked matches the list of possible threats have the computer choose the 3rd square,
else have the computer mak a random choice.

------------------------------------------------------------------------------------

a.Checking for squares marked by player: 
1. create a variable POSSIBLE_THREATS with all the combination of possible threats
2. iterate through the array of possible threats, if a threat is detected have the computer choose the 3rd square 


*/

const POSSIBLE_THREATS = [
  [1, 2], [2, 3], [1, 3], // line
  [4, 5], [5, 6], [4, 6], // line
  [7, 8], [8, 9], [7, 9], // line
  [1, 4], [4, 7], [1, 7], // column
  [2, 5], [5, 8], [2, 8], // column
  [3, 6], [6, 9], [3, 9], // column
  [1, 5], [5, 9], [1, 9], // diagonal
  [3, 5], [5, 7], [3, 7], // diagonal
];

function detectThreat(board) {
  for (let idx = 0; idx < POSSIBLE_THREATS.length; idx += 1) {
    let [sq1, sq2] = POSSIBLE_THREATS[idx];
    if (board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER) 
  }
}