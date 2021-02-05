const READLINE = require('readline-sync');
const MESSAGES = require('./mortgage_assignment_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function error(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

console.log('Welcome to the mortgage calculator!');

while (true) {

  prompt(MESSAGES['amount']);
  let loanAmount = READLINE.question();
  console.clear();

  while (error(loanAmount) || loanAmount < 500) {
    //prompt(MESSAGES['error']);
    console.log(`=> Please provide a positive number > 500`);
    loanAmount = READLINE.question();
    console.clear();
  }

  prompt(MESSAGES['APR']);
  let annualPerRate = READLINE.question();
  console.clear();

  while (error(annualPerRate)) {
    prompt(MESSAGES['error']);
    annualPerRate = READLINE.question();
    console.clear();
  }

  prompt(MESSAGES['length']);
  let loanLengthInYears = READLINE.question();
  console.clear();

  while (error(loanLengthInYears) || loanLengthInYears < 0.5) {
    console.log(`=> Please provide a positive number > 0.5`)
    loanLengthInYears = READLINE.question();
    console.clear();
  }

  const LOAN_LENGTH = loanLengthInYears * 12;

  const MONTHLY_INTEREST = (annualPerRate / 100) / 12;

  let monthlyPayment = loanAmount * (MONTHLY_INTEREST /
    (1 - Math.pow((1 + MONTHLY_INTEREST), (-LOAN_LENGTH))));

  let totalPayment = monthlyPayment * LOAN_LENGTH;
  let totalInterest = totalPayment - loanAmount;

  console.log(`Payment Every Month: $${monthlyPayment.toFixed(2)}\n
  Total Payment is of: $${totalPayment.toFixed(2)}\n
  Total Interest is of $${totalInterest.toFixed(2)}`);

  prompt(MESSAGES['again']);
  let again = READLINE.question();
  console.clear();
  if (again.toLowerCase() !== 'y') {
    console.log('Alright have a good day then!');
    break;
  }
}