const readline = require('readline-sync');
let age = Number(readline.question('what is your age? '));
let retirementAge = Number(readline.question('At what age would you like to retire? '));

let today = new Date();
let currentYear = today.getFullYear();

let yearsToGo = retirementAge - age;
let yearOfRetirement = yearsToGo + currentYear;

console.log(`It's ${currentYear}. You will retire in ${yearOfRetirement}.\nYou have only ${yearsToGo} of work to go!`);

