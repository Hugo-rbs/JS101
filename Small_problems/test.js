/*

input: string
output: the same string with non-alphanumeric elements replaced by spaces - no consecutive spaces 

1. take the string check if it contains any non-alphnumeric elements
2. replace the elements by spaces 
3.Remove consecutive spaces 
4. return result 

ex :
cleanUp("---what's my +*& line?");    // " what s my line "

*/

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function cleanUp(string) {
  let result = '';
  for (let idx = 0; idx  <= string.length; idx++) {
    if (isLetter(string[idx])) {
      result += string[idx];
    }
  }
  return result;
}

console.log(cleanUp("---what's my +*& line?"))