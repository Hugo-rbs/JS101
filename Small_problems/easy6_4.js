function centerOf(string) {
  let result  = '';
  let middle = string.length / 2;
  if (string.length % 2 === 1) {
    result = string.charAt(middle);
  } else if (string.length % 2 === 0) {
    result = string.charAt(middle - 1) + string.charAt(middle);
  }
  return result;
}



console.log(centerOf('I love Javascript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));