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

// function stringy(number) {
//   let counter = 1;
//   let result = '';

//   while (counter <= number ) {
//     if (counter % 2 === 1) {
//       result += '1';
//     } else if(counter % 2 == '0') {
//       result += '0'
//     }
//     counter += 1;
//   }
//   console.log(result);
// }


// function stringy(number) {
//   let result = '';
//   for (let counter = 1; counter <= number; counter += 1) {
//     result += counter % 2 === 1 ? 1 : 0
//   }
//   console.log(result);
// }

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"