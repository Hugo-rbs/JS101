let rlsync = require('readline-sync');

console.log('What is the bill?');
let bill = rlsync.prompt();
bill = parseFloat(bill);

console.log('What is the tip percentage?');
let tipRate = rlsync.prompt();
tipRate = parseFloat(tipRate);

let tip = (bill / 100) * tipRate;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

