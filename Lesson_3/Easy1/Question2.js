let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// function exclamation(string) {
//   return string[string.length - 1] === '!';
// }

// function exclamation(string) {
//   return string.includes('!');
// }

function exclamation(string) {
  return string.endsWith('!');
}
console.log(exclamation(str1));
console.log(exclamation(str2));

