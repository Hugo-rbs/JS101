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