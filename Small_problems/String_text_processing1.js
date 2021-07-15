// The long way

// function isUppercase(str) {
  
//   let arrayOfLetters = str.split('');

//   return arrayOfLetters.map(char => authorizedChar(char))
//                        .every(el => el === true);
// }

// function authorizedChar(char) {
//   return char < 'a' || char > 'z';
// }

// The short one:

function isUppercase(str) {
  console.log(str.toUpperCase() === str);
}


// another one: 

// function isUppercase(str) {
//   return !/[a-z]/.test(str);
// }

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true