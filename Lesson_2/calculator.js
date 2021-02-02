// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for the operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

function calculator() {
  const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to the Calculator!');

prompt('What is the first number?');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt('Hmm.. that doesn\'t look like a valid number.');
  number1 = readline.question();
}

prompt('What is the second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt('Hmm.. that doesn\'t look like a valid number.');
  number2 = readline.question();
}

prompt('What operation would you like to perform?\n1) Add\n2) Substract\n3) Multiply \n4)Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, or 4');
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

prompt(`Would you like to perform another calculation?\n1) Yes\n2) No`);
let restart = readline.question();

while(!['1', '2'].includes(restart)) {
  prompt('Please type 1 if you would like to perform another operation 2 otherwise.');
  restart = readline.question();
}

if(restart === '1') {
  return calculator();
} else if (restart === '2') {
  prompt(`Alright, have a good rest of your day then!`);
}
}

calculator();