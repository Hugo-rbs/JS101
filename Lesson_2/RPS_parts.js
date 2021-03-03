const WINNING_COMBOS = {
  scissors : {paper : 'cuts', lizard: 'disaproves'},
  rock : {scissors: 'crushes', lizard: 'crushes'},
  paper : {rock: 'covers', spock: 'disproves'},
  lizard : {spock: 'poisons', paper: 'eats'},
  spock : {scissors: 'smashes', rock: 'vaporizes'}
};




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



function userChoiceValidation(userChoice) {
let keys = Object.keys(WINNING_COMBOS);
  for (let idx = 0; idx < keys.length ; idx ++) {
  if (userChoice === keys[idx] || userChoice.slice(0,2) === keys[idx].slice(0,2));
      return true;
    } return false; 
}  


console.log(userChoiceValidation('zzzzzzzz'));


// let keys = Object.keys(WINNING_COMBOS);
// for (let idx = 0; idx < keys.length ; idx ++) {
// console.log(keys[idx].slice(0,2))
// }
