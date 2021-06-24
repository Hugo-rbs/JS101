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

// other solution using methods //

// function leadingSubstrings(string) {
//   let result = [];
//   for (let idx = 1; idx <= string.length; idx += 1) {
//     let substring = string.slice(0, idx);
//     result.push(substring);
//   }
//   return result;
// }

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]