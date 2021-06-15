// function repeater(string) {
//   let doubler = '';
//   for (let idx = 0; idx < string.length; idx ++) {
//     doubler += string[idx].repeat(2);
//   }
//   return doubler;
// }

// function repeater(string) {
//   let doubler = [];
//   for (let idx = 0; idx < string.length; idx ++) {
//     doubler.push(string[idx], string[idx]);
//   }
//   console.log(doubler.join(''));
// }


// function repeater(string) {
//   let repeatedString = '';
//   string.split('').forEach(char => repeatedString += char.repeat(2));
//   console.log(repeatedString);
// }

function repeater(string) {
  return string.split("").map(char => char.repeat(2)).join("");
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater(''); 