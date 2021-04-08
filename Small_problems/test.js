function stringToInteger(string) {
  let numbers = { 0:0, 1 : 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9};
  let arrayOfNumbers = string.split('').map(digits => numbers[digits]);
  let value = 0;
  arrayOfNumbers.forEach(number => (value = (10 * value) + number));
  return value;
}

console.log(stringToInteger('4321'));