function leadingSubstrings(string) {
  let substring = [];
  let index = 0;
  for (let length = 1; length <= string.length; length += 1) {
    substring.push(string.slice(index, length));
    if (length === string.length) {
      length = 0;
      index += 1;
    }
  }
  console.log(substring);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]