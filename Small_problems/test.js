function isRealPalindrome(string) {
  string = removeNonLettersOrNumbers(string.toLowerCase());
  return isPalindrome(string);
}
function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

function removeNonLettersOrNumbers(string) {
  let newString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      newString += string[idx];
    }
  }
  return newString;
}

// console.log(isPalindrome(updatedString('madam')));
// console.log(isPalindrome(updatedString('Madam')));
// console.log(isPalindrome(updatedString("madam i'm adam")));

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam i'm adam"));

