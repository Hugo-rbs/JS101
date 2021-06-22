function leadingSubstrings(string) {
  let result = [];
  let substring = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    let currentValue = string[idx];
    substring += currentValue;
    result.push(substring);
  }
  console.log(result);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]