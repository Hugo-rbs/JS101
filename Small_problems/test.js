function isUppercase(str) {
  
  let arrayOfLetters = str.split('');

  return arrayOfLetters.map(char => authorizedChar(char))
                       .every(el => el === true);
}

function authorizedChar(char) {
  return char < 'a' || char > 'z';
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

