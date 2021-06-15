function reverseNumber(number) {
  let arrayOfReversedNumbers = String(number).split('').reverse();
  let reversedNumberString = arrayOfReversedNumbers.join('');
  return parseInt(reversedNumberString, 10);
}

// function reverseNumber(number) {
//   let result = String(number).split('').reverse().filter(num => num > 0);
//   console.log(Number(result.join('')));
// }

// function reverseNumber(number) {
//   let reversedNumbers = String(number).split('').reverse().join('');
//   let result = parseInt(reversedNumbers, 10);
//   console.log(result);
// }


console.log(reverseNumber(12345));
console.log(reverseNumber(12000));