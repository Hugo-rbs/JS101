function wordSizes(string) {
  let result = {};
  string = cleanString(string.toLowerCase());
  let arrayOfWords = cleanString(string).split(' ');
  for (let idx = 0; idx < arrayOfWords.length; idx++) {
    let wordSize = arrayOfWords[idx].length;
    if (wordSize === 0) {
      continue;
    }
    if (!result[wordSize]) {
      result[wordSize] = 0;
    }
    result[wordSize] += 1;
  }
  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function cleanString(string) {
  let cleanString = "";

  for (let idx = 0; idx < string.length; idx++) {
    if (isLetter(string[idx]) || string[idx] === ' ') {
      cleanString += string[idx];
    }
  }
  return cleanString;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));