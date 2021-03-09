const WINNING_COMBOS = {
  scissors : {paper : 'cuts', spock: 'disaproves'},
  rock : {scissors: 'crushes', lizard: 'crushes'},
  paper : {rock: 'covers', spock: 'disproves'},
  lizard : {spock: 'poisons', paper: 'eats'},
  spock : {scissors: 'smashes', rock: 'vaporizes'}
};

let randomIndex = Math.floor(Math.random() * Object.keys(WINNING_COMBOS).length);
let computerChoice = Object.keys(WINNING_COMBOS)[randomIndex];

console.log(computerChoice);

console.log(randomIndex);
