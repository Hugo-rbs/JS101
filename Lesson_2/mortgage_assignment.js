const READLINE = require('readline-sync');
const MESSAGES = require('./mortgage_assignment_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function validPerRate(rate) {
  return rate.trimStart() === '' || Number.isNaN(Number(rate)) ||
  rate <= 0;

}

function validLoanAmount(loanamount) {
  return loanamount.trimStart() === '' || Number.isNaN(Number(loanamount)) ||
  loanamount < 500;
}

function validLoanDuration(loanlength) {
  return loanlength.trimStart() === '' || Number.isNaN(Number(loanlength)) ||
  loanlength < 0.5 || loanlength >= 30;

}

console.log('Welcome to the mortgage calculator!');

while (true) {

  prompt(MESSAGES['amount']);
  let loanAmount = READLINE.question();
  console.clear();

  while (validLoanAmount(loanAmount)) {
    console.log(`=> Please provide a positive number > 500`);
    loanAmount = READLINE.question();
    console.clear();
  }

  prompt(MESSAGES['APR']);
  let annualPerRate = READLINE.question();
  console.clear();

  while (validPerRate(annualPerRate)) {
    prompt(MESSAGES['error']);
    annualPerRate = READLINE.question();
    console.clear();
  }

  prompt(MESSAGES['length']);
  let loanLengthInYears = READLINE.question();
  console.clear();

  while (validLoanDuration(loanLengthInYears)) {
    console.log(`=> Please provide a positive number between 0.5 and 30`);
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
  Total Payment: $${totalPayment.toFixed(2)}\n
  Total Interest: $${totalInterest.toFixed(2)}`);

  prompt(MESSAGES['again']);
  let again = READLINE.question();
  console.clear();

  while (again.toLowerCase() !== 'y' && again.toLowerCase() !== 'n') {
    console.log('Please type "y" for yes, "n" for no.');
    again = READLINE.question();
  }
    if (again.toLowerCase() === 'n') {
      console.log('Alright, have a good day then!');
      break;
    }
}


// error(loanAmount)|| loanAmount < 500 on loan.