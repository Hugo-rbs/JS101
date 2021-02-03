const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to the car loan Calculator!');

prompt("What's your loan amount?");
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  prompt("please provide an integer number");
  loanAmount = readline.question();
}

prompt("Please provide your annual percentage rate (APR) in % (eg for 10% type 10)");
let annualPerRate = readline.question();

while (invalidNumber(annualPerRate)) {
  prompt("please provide an integer number");
  annualPerRate = readline.question();
}


prompt("please provide your loan duration in months (eg 5.5 for a 5 years and a half)");
let loanLength = readline.question();


//const LOAN_MONTH = loanLength * (12 * 1);
const MONTHLY_INTEREST_RATE = (annualPerRate / 100) / loanLength; 

let monthlyPayment = Number(loanAmount * (MONTHLY_INTEREST_RATE / (1 - Math.pow((1 + MONTHLY_INTEREST_RATE),(- loanLength)))));
monthlyPayment = monthlyPayment.toFixed(2);

console.log(`Your monthly payment is of $${monthlyPayment}`);


