function add(a,b) {
  return a + b; 
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let readline = require('readline-sync');
console.log('Welcome to the calculator!');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidInput(input) {
  if (input.trim() === '' || Number.isNaN(Number(input))) {
    console.log('please provide an integer');
  }
}


while(true) {

prompt('Please provide the first number:');
let number1 = readline.question();
console.clear();

while(invalidInput(number1)) {
  prompt('Wrong input, please provide an integer:');
  number1 = readline.question();
  console.clear();
}

prompt('Please provide the second number:');
let number2 = readline.question();
console.clear();

while(invalidInput(number2)) {
  prompt('Wrong input, please provide an integer:');
  number2 = readline.question();
  console.clear();
}

prompt('What operation would you like to perform? type 1 to add, 2 to substract, 3 to multiply and 4 to divide');
let operation = readline.question();
console.clear();

function result(userInput) {
switch(userInput) {
  case '1': return (`The addition of ${number1} and ${number2} is ${add(Number(number1), Number(number2))}`);
  case '2': return (`The substraction of ${number1} and ${number2} is ${substract(number1, number2)}`);
  case '3': return (`The multiplication of ${number1} and ${number2} is ${multiply(number1, number2)}`);
  case '4': return (`The division of ${number1} and ${number2} is ${divide(number1, number2)}`);
}
}

console.log(result(operation));


console.log(`would you like to perform another operation? type 1 if yes, 0 otherwise`);
oneMore = readline.question();

console.clear();

if (oneMore === '0') {
  console.log('Alright, have a good rest of your day then!');
  break;
}
}