function CleanUp (string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if(isUpperCase(string[i]) || isLowerCase(string[i])) {
      result += string[i];
    } else if (result[result.length -1] !== ' ') {
      result += ' ';
    }
  }
  console.log(result);
}


function isUpperCase(letter) {
  return letter >= 'A' && letter <= 'Z';
}

function isLowerCase(letter) {
  return letter >= 'a' && letter <= 'z'
}

CleanUp("---what's my +*& line?")