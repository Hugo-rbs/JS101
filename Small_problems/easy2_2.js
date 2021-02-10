let rlSync = require('readline-sync');
let name = rlSync.question('What is your name?\n');

if(name.includes('!')) {
  console.log(`HELLO ${name.toUpperCase().substring(0,name.length - 1)}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

// second attempt 
/*

const readline = require('readline-sync');

console.log('What is your name? ')
let name = readline.question();

console.log(name.includes('!') ? `HELLO ${name.slice(0, name.length -1).toUpperCase()}. WHY ARE YOU SCREAMING` : `Hello ${name}`);

*/
