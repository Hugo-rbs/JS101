
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