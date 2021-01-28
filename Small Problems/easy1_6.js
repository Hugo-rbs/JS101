let rlsync = require(`readline-sync`);

let integer = Number(rlsync.question('Please enter an integer greater than 0: '));
let sumOrProduct = rlsync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

function sum() {
  let result = 1;
  for (let counter = integer; counter > 1; counter -= 1) {
    result += counter;
  }
  return result;
}

function multiply() {
  let result = 1;
  for (let counter = integer; counter > 1; counter -= 1) {
    result *= counter;
  }
  return result;
}

function print() {
  if (sumOrProduct === 's') {
    console.log(`The sum of the integers between 1 and ${integer} is ${sum(integer)}.`);
  } else if (sumOrProduct === 'p') {
    console.log(`The product of the integers between 1 and ${integer} is ${multiply(integer)}.`);
  }
}

print();

// to do // 

/* 
1. rewrite the code in a different manner
2. validare the user's input and issue an error as needed
3. Further exploration


