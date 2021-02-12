function stringy(number){
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 1) {
      result.push('1');
    } else if (i % 2 === 0) {
      result.push('0');
    }
  }
  console.log(result.join(''));
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"