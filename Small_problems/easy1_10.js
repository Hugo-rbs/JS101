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

// with reduce // 

/*
function isMultipleOfThree(number) {
 return number % 3 === 0;
}

function isMultipleOfFive(number) {
  return number % 5 === 0;
}

function multisum(number) {
  let multiples = [];
  for (let multiple = 1; multiple <= number; multiple += 1) {
    if (isMultipleOfFive(multiple) || isMultipleOfThree(multiple)) {
      multiples.push(multiple);
    }
  }
  return multiples.reduce((accumulator, element) => {
    return accumulator + element}, 0);
  }
  */