// function digitList(number) {
//   let digits = [];
//   while (number > 0) {
//     let lastDigit = number % 10;
//     digits.unshift(lastDigit);
//     number = Math.floor(number / 10);
//   }
//   console.log(digits);
// }

function digitList(number) {
  let digits = [];
  let numberToString = String(number);
  for (let idx = 0; idx < numberToString.length; idx += 1) {
    let digit = parseInt(numberToString[idx], 10);
    digits.push(digit);
  }
  console.log(digits);
}

digitList(12345);