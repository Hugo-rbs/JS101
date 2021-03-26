function removeNonLetternumbers(string) {
  let alphaNumericString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (isNumber(string[idx]) || isLetter(string[idx])) {
      alphaNumericString += string[idx];
    }
  }
  return alphaNumericString;
}

function isNumber(character) {
  return character >= 0 || character <= 9;
}

function isLetter(character) {
  return character >= 'a' && character <= 'z';
}

function isPalindrome(string) {
  return string === string.split('').reverse().join("");
}

function isRealPalindrome(string) {
  string = removeNonLetternumbers(string.toLowerCase());
  return isPalindrome(string);
}

// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false
