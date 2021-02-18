const rlsync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter a noun:');
let noun = rlsync.question();

prompt('Enter a verb:');
let verb = rlsync.question();

prompt('Enter an adjective:');
let adjective = rlsync.question();

prompt('Enter an adverb');
let adverb = rlsync.question();


console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);