function swapCase(string) {
  return string.split('').map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));