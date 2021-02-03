// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for the operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

while (true) {
  
prompt(MESSAGES['first']);
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(MESSAGES['error']);
  number1 = readline.question();
}

prompt(MESSAGES['second']);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(MESSAGES['error']);
  number2 = readline.question();
}

prompt(MESSAGES['operation']);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(MESSAGES["error2"]);
  operation = readline.question();
}

let output;

switch (operation) {
  case '1' : output = Number(number1) + Number(number2);
    break;
  case '2' : output = Number(number1) - Number(number2);
    break;
  case '3' : output = Number(number1) * Number(number2);
    break;
  case '4' : output = Number(number1) / Number(number2);
}


prompt(`The result is: ${output}`);

prompt(MESSAGES['new']);
let answer = readline.question();

if (answer[0].toLowerCase() !== 'y') break;
}