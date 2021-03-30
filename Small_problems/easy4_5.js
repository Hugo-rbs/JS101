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

/*
3/29 work in progress 

// function isPalindrome(string) {
//   return string.split('').reverse().join('') === string;
// }

// console.log(isPalindrome('madam'));
// console.log(isPalindrome('Madam'));
// console.log(isPalindrome("madam i'm adam"));
// console.log(isPalindrome('356653'));

function test(string) {
  string = string.toLowerCase();
  let cleanString = [];
  for (let idx = 0; idx < string.length; idx++) {
    if ((string[idx] >= 0 && string[idx] <= 9) || (string[idx] >= 'a' && string[idx] <= 'z')) {
      cleanString.push(string[idx]);
    }
  }
  console.log(cleanString.join(''));
}

test('Madam, I"m Adam');

*/