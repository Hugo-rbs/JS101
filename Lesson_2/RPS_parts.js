// const WINNING_COMBOS = {
//   scissors : {paper : 'cuts', spock: 'disaproves'},
//   rock : {scissors: 'crushes', lizard: 'crushes'},
//   paper : {rock: 'covers', spock: 'disproves'},
//   lizard : {spock: 'poisons', paper: 'eats'},
//   spock : {scissors: 'smashes', rock: 'vaporizes'}
// }

const VALID_CHOICES = ['scissors', 'paper', 'rock', 'lizard', 'spock']

// function to validate user's input //

// function userChoiceValidation(userChoice) {

//   for (let idx = 0; idx < VALID_CHOICES.length; idx ++) {
//     if (userChoice === VALID_CHOICES[idx] || userChoice[0] === VALID_CHOICES[idx][0]) {
//       return true;
//     }
//   } return false;
// }

// function to generate a random choice for the computer // 

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];
