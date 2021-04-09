function isConsonant(char) {
  let consonants = 'bcdfghjklmnpqrstvwxz';
  return consonants.indexOf(char) >= 0 || consonants.toUpperCase()
                                                    .indexOf(char) >= 0;
}

function doubleConsonants(string) {
  return string.split('').map(char => {
    if (isConsonant(char)) {
      return char + char;
    }
    return char;
  }).join('');
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));