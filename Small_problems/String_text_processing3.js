function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}


function letterCaseCount(string) {
  let obj = {
    lowercase : 0,
    uppercase : 0,
    neither : 0
  };
  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (isLowerCase(char)) {
      obj['lowercase'] += 1;
    } else if (isUpperCase(char)) {
      obj['uppercase'] += 1;
    } else {
      obj['neither'] += 1;
    }
  }
  console.log(obj);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }