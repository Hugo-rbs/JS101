function wordSizes(string) {
  let result = {};
  let arrayOfWords = string.split(' ');
  for (let idx = 0; idx < arrayOfWords.length; idx++) {
    let wordLength = arrayOfWords[idx].length;
    if (wordLength === 0) {
      continue;
    }
    if (!result[wordLength]) {
      result[wordLength] = 0;
    }
    result[wordLength] += 1;
  }
  return result;
}

console.log(wordSizes('hello hello hello what is up? y"all'));