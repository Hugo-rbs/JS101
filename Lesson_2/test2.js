const WINNING_COMBOS = {
  scissors : {paper : 'cuts', spock: 'disaproves'},
  rock : {scissors: 'crushes', lizard: 'crushes'},
  paper : {rock: 'covers', spock: 'disproves'},
  lizard : {spock: 'poisons', paper: 'eats'},
  spock : {scissors: 'smashes', rock: 'vaporizes'}
};
let test2 = 'spock';
let test = Object.keys(WINNING_COMBOS);

console.log(test.includes(test2));

