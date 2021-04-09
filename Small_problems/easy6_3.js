function reverseNumber(number) {
  let arrayOfReversedNumbers = String(number).split('').reverse();
  let reversedNumberString = arrayOfReversedNumbers.join('');
  return parseInt(reversedNumberString, 10);
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12000));