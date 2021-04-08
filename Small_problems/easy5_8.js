// function digitList(number) {
//   numberToString = String(number);
//   let result = [];
//   for (let idx = 0; idx < numberToString.length; idx ++) {
//     result.push(Number(numberToString[idx]));
//   }
//   return result;
// }

function digitList(number) {
  return [...String(number)].map(number => Number(number));
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));