console.log(cleanUp("---what's my +*& line?"));    // " what s my line "


function isLetter(char) {
  char = char.toLowerCase();
  return char >= 'a' && char <= 'z';
}

function cleanUp(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (isLetter(char)) {
      result += char;
    } else if(result[result.length - 1] !== 0) {
      result += ' ';
    }
  }
  return result;
}