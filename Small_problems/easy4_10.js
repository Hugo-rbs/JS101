function swap(string) {
  return string.split(' ').map(word => {
    if (word.length < 2) {
      return word;
    }
    // eslint-disable-next-line max-len
    return word.charAt(word.length - 1) + word.slice(1, word.length - 1) + word[0];
  }).join(' ');
}


console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));


// other solution - cleaner //

// function swap(string) {
//   let stringToArray = string.split(' ');
//   for (let idx = 0; idx < stringToArray.length; idx ++) {
//     stringToArray[idx] = swapLetters(stringToArray[idx]);
//   }
//   return stringToArray.join(' ');
// }

// function swapLetters(word) {
//   if (word.length === 1) {
//     return word;
//   }
//   return word[word.length - 1] + word.slice(1, -1) + word[0];
// }


