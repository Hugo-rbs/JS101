function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}


function isLetter(char) {
  return char >= 'a' && char <= 'z';
}


function isNumber(char) {
  return char >= '0' && char <= '9';
}


function cleanString(string) {
  string = string.toLowerCase();
  let result = '';
  for(let idx = 0; idx < string.length; idx ++) {
    if (isNumber(string[idx]) || isLetter(string[idx])) {
      result += string[idx];
    }
  }
  return result;
}

function isRealPalindrome(string) {
  string = cleanString(string);
  console.log(isPalindrome(string));
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');