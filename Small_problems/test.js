function swapCase(string) {
  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      return char.toUpperCase();
    }
  }
  return string;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"