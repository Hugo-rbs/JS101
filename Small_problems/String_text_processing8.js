// function wordLengths(string) {
//   let array = [];
//   string.split(' ').forEach(word => array.push(word + ' ' + word.length));
//   console.log(array);
// }

function wordLengths(string) {
  return string.split(' ').map(word => word + ' ' + word.length);
}

console.log(wordLengths('cow sheep chicken'));