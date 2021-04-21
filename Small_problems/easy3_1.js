function crunch(str) {
  let newString = [];
  for (let i = 0; i < str.length; i ++) {
      if (newString[newString.length -1] !== str[i]) {
        newString.push(str[i]);
      }
  }
  return newString.join('');
}

// alternative // 

// function crunch(string) {
//   let result = '';
//   for (let idx = 0; idx < string.length; idx ++) {
//     if(string[idx] === string[idx + 1]) {
//       continue;
//     } else {
//       result += string[idx];
//     }
//   }
//   return result;
// }



console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""