function changeMe(string) {
  let result = [];
  let arrayOfWords = string.split(' ');
  arrayOfWords.forEach(word => {
    if (word.split('').reverse().join('') === word) {
      result.push(word.toUpperCase());
    } else {
      result.push(word);
    }
  });
  return result.join(' ');
}

console.log(changeMe('We will meet at noon'));
console.log(changeMe("No palindromes here"));
console.log(changeMe(''));
console.log(changeMe("I LOVE my mom and dad equally"));
