function isMultipleOfThree(number) {
 return number % 3 === 0;
}

function isMultipleOfFive(number) {
  return number % 5 === 0;
}

function multisum(number) {
  let result = 0
  for (let multiple = 1; multiple <= number; multiple += 1) {
    if (isMultipleOfFive(multiple) || isMultipleOfThree(multiple)) {
      result += multiple;
    }
  }
  return result;
}


console.log(multisum(1000));