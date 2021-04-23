let munstersDescription = "The Munsters are creepy and spooky.";
console.log(munstersDescription.split('').map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(''));

// wordy solution // 

// function isUpperCase(char) {
//   return char >= 'A' && char <= 'Z';
// }

// function isLowerCase(char) {
//   return char >= 'a' && char <= 'z';
// }

// function updatedString(string) {
//   let result = '';
//   for (let char = 0; char < string.length; char++) {
//     if (isUpperCase(string[char])) {
//       result += string[char].toLowerCase();
//     } else if (isLowerCase(string[char])) {
//       result += string[char].toUpperCase();
//     } else {
//       result += string[char];
//     }
//   }
//   console.log(result);
// }

// updatedString(munstersDescription)