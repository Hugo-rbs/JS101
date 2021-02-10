let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let product = (a, b) => a * b;
let quotient = (a, b) => Math.floor(a / b);
let remainder = (a, b) => a % b;

rlSync = require('readline-sync');

console.log(`==> Enter the first number:`);
let firstNumber = Number(rlSync.prompt());

console.log(`==> Enter the second number:`);
let secondNumber = Number(rlSync.prompt());

console.log(`==> ${firstNumber} + ${secondNumber} = ${sum(firstNumber, secondNumber)}`);
console.log(`==> ${firstNumber} - ${secondNumber} = ${sub(firstNumber, secondNumber)}`);
console.log(`==> ${firstNumber} * ${secondNumber} = ${product(firstNumber, secondNumber)}`);
console.log(`==> ${firstNumber} / ${secondNumber} = ${quotient(firstNumber, secondNumber)}`);
console.log(`==> ${firstNumber} % ${secondNumber} = ${remainder(firstNumber, secondNumber)}`);
console.log(`==> ${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`);

// second attempt 

/*

const readline = require('readline-sync');

let firstNumber = Number(readline.question('=> Enter the first number: '));
let secondNumber = Number(readline.question('=> Enter the second number: '));

function compute(n1, n2) {
  return `=> n1 + n2 = ${n1 + n2}\n 
  => ${n1} - ${n2} = ${n1 - n2}\n
  => ${n1} * ${n2} = ${n1 * n2}\n
  => ${n1} / ${n2} = ${Math.round(n1 / n2)}\n
  => ${n1} % ${n2} = ${n1 % n2}\n
  => ${n1} ** ${n2} = ${n1 ** n2}`
}

console.log(compute(firstNumber, secondNumber));

*/