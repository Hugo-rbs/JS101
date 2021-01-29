function asciiValue(string) {
  string.trim();
  let result = 0;
  for (let index = 0; index < string.length; index ++) {
    result += string.charCodeAt(index);
  }
  console.log(result);
}