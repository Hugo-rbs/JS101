let rlSync = require('readline-sync');
let name = rlSync.question('What is your name?\n');

if(name.includes('!')) {
  console.log(`HELLO ${name.toUpperCase().substring(0,name.length - 1)}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}