function isPalindrome(string) {
  let array = string.split('');
  return array.reverse().join('').toLowerCase() === string;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('356653'));