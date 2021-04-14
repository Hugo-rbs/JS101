function reverseWords(string) {
  return string.split(' ').forEach(element => { if (element.length >= 5) {
    element.split(' ').reverse()
  }}).join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'))