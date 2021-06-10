function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

function letterCount(string) {
  let arrayOfLetters = string.split('');
  let cleanArray = "";
  let letterCount = {};
  for (let idx = 0; idx < arrayOfLetters.length; idx += 1) {
    let char = arrayOfLetters[idx];
    if (isLetter(char) || isUpperCaseLetter(char)) {
      cleanArray += char;
    }
  }
  for (let idx = 0; idx < cleanArray.length; idx += 1) {
    let letter = cleanArray[idx];
    if (!letterCount[letter]) {
      letterCount[letter] = 0;
    }
    letterCount[letter] += 1;
  }
  console.log(letterCount);
}
letterCount("The Flintstones Rock");