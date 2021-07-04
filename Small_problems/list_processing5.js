function leadingSubstrings(string) {
  let substrings = [];
  let firstChar = string[0];

  for (let idx = 1; idx <= string.length; idx += 1) {
    substrings.push(string.slice(firstChar, idx));
  }
  return substrings;
}


function substrings(string) {

let allSubstrings = [];

for (let idx = 0; idx < string.length; idx += 1) {
  allSubstrings.push(leadingSubstrings(string.slice(idx, string.length)));
}

return allSubstrings.flat();
}

substrings('abcde')