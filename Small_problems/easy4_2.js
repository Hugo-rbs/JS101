const readline = require('readline-sync');

let first = readline.question('enter the 1st number:');
let second = readline.question('enter the 2nd number:');
let third = readline.question('enter the 3rd number:');
let fourth = readline.question('enter the 4th number:');
let fifth = readline.question('enter the 5th number:');
let sixth = readline.question('enter the last number:');

let numbers = [first, second, third, fourth, fifth];

// function isIncluded(number, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === number) {
//       return true;
//     }
//   }
//   return false;
// }


// console.log(isIncluded(sixth, numbers) ? `The number ${sixth} appears in ${numbers.join(',')}` : `The number ${sixth} does not appear in ${numbers.join(',')}`);

// alternative //

if (numbers.includes(sixth)) {
  console.log(`The number ${sixth} appears in ${numbers.join(',')}.`);
} else {
  console.log(`The number ${sixth} does not appear in ${numbers.join(',')}.`);
}