function wordSizes(string) {
  let result = {};
  let arrayOfWords = string.split(' ');
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
  console.log(result);
 }
 
 wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
 wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
 wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
 wordSizes(''); 