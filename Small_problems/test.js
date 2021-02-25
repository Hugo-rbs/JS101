function stringy(number) {
  let result = '';
  for (let counter = 1; counter <= number; counter += 1) {
    result += counter % 2 === 1 ? 1 : 0
  }
  console.log(result);
}

stringy(6)
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7); 
