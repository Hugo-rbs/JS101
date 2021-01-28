function asciiValue(string) {
  if (string.trim('').length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < string.length; i ++) {
    let character = string.charCodeAt([i]);
    sum += character;
  }
  return sum;
}

console.log(asciiValue(''));