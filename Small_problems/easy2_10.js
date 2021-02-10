function stringToSignedInteger(string) {
  const DIGITS = {
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
  };
  let arrayOfDigits = string.split("");
  let digitsToConvert = [];
  let value = 0;
  digitsToConvert = arrayOfDigits.map(character => DIGITS[character]);
  if (arrayOfDigits.includes('-')) {
    digitsToConvert.slice(1).forEach(element => value = (10 * value ) + element);
    return -Math.abs(value);
  } else if (arrayOfDigits.includes('+')) {
    digitsToConvert.slice(1).forEach(element => value = (10 * value ) + element);
    return value;
  } else {
    digitsToConvert.forEach(element => value = (10 * value ) + element);
    return value;
  }
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); //true