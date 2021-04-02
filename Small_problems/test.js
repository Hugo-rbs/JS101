// function wordSizes(string) {
//   let wordsCount = {};
//   let arrayOfLetters = string.split('');
//   let arrayOfWords = string.split(' ');

//   for (let idx = 0; idx < arrayOfWords.length; idx++) {
//     let length = arrayOfWords[idx].length;
//     if(length === 0) {
//       continue;
//     }
//     if(!wordsCount[length]) {
//       wordsCount[length] = 0;
//     }
//     wordsCount[length] += 1;
//   }
//   return wordsCount;
// }

// console.log(wordSizes('Four score and seven.'));

let string = 'Four score and seven.'

let arrayOfChar = string.split('');



function isLetter(array) {
  let arrayOfWords = array.map(element => {
    if (element.toLowerCase() >= 'a' && element.toUpperCase() <= 'z') {
      return element;
    }
  }).join('');
  return arrayOfWords;
}

console.log(isLetter(arrayOfChar));