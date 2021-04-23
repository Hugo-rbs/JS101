
function factors(number) {
  let divisor = number;
  let factors = [];
  if (number < 2) {
    return 'Provide a number > 2';
  }
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(1));


// other solution // 

// function factors(number) {
//   let factors = [];
//   if (number === 0 || Math.abs(number) === -1) {
//     return 'Number needs to be greater then 0.';
//   }
//   for (let divisor = number; divisor > 0; divisor--) {
//     if (number % divisor === 0) {
//       factors.push(divisor);
//     }
//   }
//   return factors;
// }

// console.log(factors(0));