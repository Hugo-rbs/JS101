const CONSONANTS = ['b', 'c,', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 's', 't', 'v', 'x', 'y', 'z', 'h', 'r', 'w'];

function isConsonant(char) {
  return CONSONANTS.includes(char.toLowerCase());
}

function doubleConsonants(string) {
  let doubleConsonantsString = string.split('').map(char => {
    if (isConsonant(char)) {
      return char.repeat(2);
    }
    return char;
  });
  console.log(doubleConsonantsString.join(''));
}
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');   