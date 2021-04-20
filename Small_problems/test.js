/*
Write a function that takes a string consisting of zero or more space separated words 
and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

input: string;
output: object(key-value pair) showing the number of words of different sizes

examples: 

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');    // {}

1/ determine the length of each word in the string: converted it to an array
2/ if the word is >= 0 continue
3/ if word with the same length already exists, increment the count
4/ return result

*/

function wordSizes(string) {
  let count = {};
  let arrayOfWords = string.split(' ');
  for (let idx = 0; idx < arrayOfWords.length; idx ++) {
    let wordSize = arrayOfWords[idx].length;
    if (count[wordSize] === 0) {
      continue;
    }
    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }
  return count;
}
console.log(wordSizes('Four score and seven.'));