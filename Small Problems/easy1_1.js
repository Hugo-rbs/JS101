
// with ternary operator // 
/* function isOdd(integer) {
  return Math.abs(integer) % 2 === 1;
}
*/
// other solution (most succint) //

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

console.log(isOdd(2)); // => falses
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

