function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    console.log(str2 + str1 + str2);
  } else if (str2.length > str1.length) {
    console.log(str1 + str2 + str1);
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz'); 

// second attempt 
/*
function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
}
*/ 