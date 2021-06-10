function swap(string) {
  let stringToArray = string.split(' ');
  for (let idx = 0; idx < stringToArray.length; idx ++) {
    stringToArray[idx] = swapLetters(stringToArray[idx]);
  }
  return stringToArray.join(' ');
}

function swapLetters(word) {
  if (word.length === 1) {
    return word;
  }
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}


console.log(swap('Abcde'));
console.log(swap('Oh what a wonderful day it is'));
console.log(swap('a'))