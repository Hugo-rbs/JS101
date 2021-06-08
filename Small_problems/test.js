function isPalindromicNumber(number) {
  number = String(number);
  return number.split('').reverse().join('') === number;
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
