function isLetter(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

function cleanUp(string) {
  let result = '';
  for (let idx = 0; idx <= string.length; idx += 1) {
    if (isLetter(string[idx])) {
      result += string[idx];
    } if (result.length -1 !== ' ') {
      result += ' ';
    }
  }
  return result;
}

console.log(cleanUp("---what's my +*& line?"));