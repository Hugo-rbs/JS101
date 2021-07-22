// working on...//
// keeping score & best to five (best player out of 5 games)//

/*
What do we need

a way to keep track of the score after each round is played / this needs to be printed on the screen 

1. keeping track of the score:
- set a ROUND_TO_PLAY: 5
- use the detectWinner function to increment the Player or Computer score
- use the someoneWon function to decrement the number of rounds to play
- if the number of round played is equal to round to play stop
- show the score and grandWinner
- reset the score 
- new game? 

// incrementing the player or computer score //

we need to store the result somewhere increase it and print it at each round;
- to store it, we can store it in an object:
score = {
  Player : 0;
  Computer : 0,
}
- we can create a function to increase the score in the object accordingly
- console.log to print it 


example of expected output: 

Rounds left to play: 4
Score - Player: 0 | Computer 1

You win the game!
-----------------
Rounds played: 5
Score - Player: 3 | Computer : 1 | Tie : 1
------------------------------------------
Would you like to play another game (y/n)
*/

function keepingScore() {
  if (detectWinner(board) === 'Player') {
    score.player += 1;
  } else if (detectWinner(board) === 'Computer') {
    score.computer += 1;
  } else {
    score.tie += 1;
  }
}

function roundToPlay(board) {
  let roundsToPlay = WINNING_SCORE;
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