function stringToInteger(string) {
  let digits = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }
  let value = 0;
  let arrayOfNumbers = string.split('').map(char => digits[char]);
  arrayOfNumbers.forEach(digits => (value = (10 * value) + digits));
  return value;
}

console.log(stringToInteger('4231') === 4231);