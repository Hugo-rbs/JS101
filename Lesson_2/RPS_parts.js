// const WINNING_COMBOS = {
//   scissors : {paper : 'cuts', spock: 'disaproves'},
//   rock : {scissors: 'crushes', lizard: 'crushes'},
//   paper : {rock: 'covers', spock: 'disproves'},
//   lizard : {spock: 'poisons', paper: 'eats'},
//   spock : {scissors: 'smashes', rock: 'vaporizes'}
// }

const VALID_CHOICES = ['scissors', 'paper', 'rock', 'lizard', 'spock']

// function userChoiceVerification(userChoice) {
//   for (let choicesIdx = 0; choicesIdx < VALID_CHOICES.length; i++) {
//     if (userChoice.toUpperCase() !== VALID_CHOICES[choicesIdx].toUpperCase() ||
//     userChoice[0].toUpperCase() !== VALID_CHOICES[choicesIdx[0]].toUpperCase()) {
//       return false;
//     } 
//   }
//   return true;
// }

// console.log(userChoiceVerification('paper'))

for (let i = 0; i < VALID_CHOICES.length; i++) {
  let word = VALID_CHOICES[i];
  for (let i = 0; i < word.length; i++) {
    console.log(word[0]);
  }
}