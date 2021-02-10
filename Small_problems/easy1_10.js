function isMultiple(number, factor) {
  return number % factor === 0;
}

function multisum(targetNumber) {
  let arrayOfMultiples = [];
  let result = 0;

  for (let number = 0; number <= targetNumber; number ++) {
  if (isMultiple(number, 3) || isMultiple(number, 5)) {
    arrayOfMultiples.push(number);
  }
 }
 for (let idx = 0; idx < arrayOfMultiples.length; idx++) {
   result += arrayOfMultiples[idx];
 }
 console.log(result);
}

multisum(20);