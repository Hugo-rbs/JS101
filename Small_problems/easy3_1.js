function crunch(str) {
  let newString = [];
  for (let i = 0; i < str.length; i ++) {
      if (newString[newString.length -1] !== str[i]) {
        newString.push(str[i]);
      }
  }
  return newString.join('');
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""