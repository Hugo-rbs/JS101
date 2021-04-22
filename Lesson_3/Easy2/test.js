let stringDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function integerToString(integer) {
  let arrayOfDigits = [];
  let result = '';
  if (integer === 0) {
    result += '0';
  }
  while (integer > 0) {
    let last = integer % 10;
    integer = Math.floor(integer / 10);
    for (let idx = 0; idx < stringDigits.length; idx++) {
      if (last === idx) {
        arrayOfDigits.push(stringDigits[idx]);
      }
    }
  }
  while (arrayOfDigits.length > 0) {
    result += arrayOfDigits.pop();
  }
  return result;
}


console.log(integerToString(4321));