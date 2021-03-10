function isPalindromicNumber(number) {
  let string = String(number).toString().split('').reverse().join('');
  console.log(Number(string) === number);
}

// function isPalindromicNumber(number) {
//   console.log(isPalindrome(String(number)));
// }

// function isPalindrome(string) {
//   return string.split('').reverse().join('').toLowerCase() === string;
// }
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true