function leadingSubstrings(string) {
  let result = [];
  for (let idx = 1; idx <= string.length; idx += 1) {
    let substring = string.slice(0, idx);
    result.push(substring);
  }
  return result;
}

console.log(leadingSubstrings('abc'));

