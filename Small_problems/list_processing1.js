// let Digits = {
//   '0': 0,
//   '1': 1,
//   '2': 2,
//   '3': 3,
//   '4': 4,
//   '5': 5,
//   '6': 6,
//   '7': 7,
//   '8': 8,
//   '9': 9,
// }

// function sum(number) {
//   return number.toString().split('').map(number => Digits[number]).reduce((accumulator, element) => {
//     return accumulator + element;
//   }, 0);
// }

// less wordy solution // 

function sum(number) {
  let result = 0;
  let arrayOfDigits = String(number).split('');
  arrayOfDigits.forEach(element => result += Number(element));
  return result;
}



sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45