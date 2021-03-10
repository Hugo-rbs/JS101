function isRealPalindrome(string) {
  let stringToLowerCase = string.toLowerCase();
  let alphaNumericString = '';
  for (let idx = 0; idx < stringToLowerCase.length; idx++) {
    if (isNumber(stringToLowerCase[idx]) || isUpperCase(stringToLowerCase[idx]) || isLowerCase(stringToLowerCase[idx])) {
      alphaNumericString += stringToLowerCase[idx];
    }
  }
  // return isPalindrome(alphaNumericString);
  console.log(alphaNumericString);
}

function isNumber(character) {
  return character >= 0 || character <= 10;
}

function isUpperCase(letter) {
  return letter >= 'A' && letter <= 'Z';
}

function isLowerCase(letter) {
  return letter >= 'a' && letter <= 'z';
}

function isPalindrome(string) {
  return string.split('').reverse().join("").toLowerCase();
}

// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false
