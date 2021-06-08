let str = "What's up, Doc?";

let test = str.split('').map(char => char + char).join('');

console.log(test);