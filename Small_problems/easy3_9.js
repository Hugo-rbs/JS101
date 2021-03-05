function CleanUp (string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (isUpperCase(string[idx]) || isLowerCase(string[idx])) {
      result += string[idx];
    } else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }
  console.log(result);
}


function isUpperCase(letter) {
  return letter >= 'A' && letter <= 'Z';
}

function isLowerCase(letter) {
  return letter >= 'a' && letter <= 'z';
}

CleanUp("---what's my +*& line?");