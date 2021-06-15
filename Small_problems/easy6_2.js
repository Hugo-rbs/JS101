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

// const CONSONANTS = ['b', 'c,', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 's', 't', 'v', 'x', 'y', 'z', 'h', 'r', 'w'];

// function isConsonant(char) {
//   return CONSONANTS.includes(char.toLowerCase());
// }

// function doubleConsonants(string) {
//   let doubleConsonantsString = string.split('').map(char => {
//     if (isConsonant(char)) {
//       return char.repeat(2);
//     }
//     return char;
//   });
//   console.log(doubleConsonantsString.join(''));
// }

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));