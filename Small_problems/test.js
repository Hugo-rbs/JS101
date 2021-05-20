function utf16Value(string) {
  let result = 0;
  for (let idx = 0; idx < string.length; idx += 1) {
    result += string.charCodeAt(idx);
  }
  console.log(result);
}


utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');