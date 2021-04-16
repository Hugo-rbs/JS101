function reversedWords(string) {
  let arrayOfWords = string.split(' ');
  let result = arrayOfWords.map(element => {
    if (element.length >= 5) {
      return element.split('').reverse().join('');
    } 
    return element;
  }).join(' ');
  return result;
}

console.log(reversedWords('Professional'));
console.log(reversedWords('Walk around the block'));