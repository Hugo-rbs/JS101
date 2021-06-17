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

// Other solution //

// function reverseWords(string) {
//   let arrayOfWords = string.split(' ');
//   let reversedWordArray = arrayOfWords.map(word => {
//     if (word.length >= 5) {
//       return word.split('').reverse().join('');
//     }
//     return word;
//   });
//   console.log(reversedWordArray.join(' '));
// }

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

console.log(reversedWords('Professional'));
console.log(reversedWords('Walk around the block'));