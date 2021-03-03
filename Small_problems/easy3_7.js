function twice(number) {
  if (number % 2 === 1) {
    console.log(number * 2);
  } else {
    let str = number.toString();
    if(str.slice(str.length / 2) === (str.slice(0, str.length /2))) {
      console.log(parseInt(str));
    } else {
      console.log(parseInt(str) * 2);
    }
  }
}






// function isEven(number) {
//   return number % 2 === 0;
// }

// function numberToArray(number) {
//   let result = '';

//   while (number > 0) { 
//     let remainder = number % 10;
//     number = Math.floor(number / 10);
//     result = remainder + result;
//   }
//   return result.split('');
// }


// console.log(numberToArray(3333))


// function equalArrays(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(newArr.indexOf(arr[i]) < 0) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr.length % 2 === 0;
// }

// console.log(equalArrays(3333))

// function twice(number) {
//   if (!isEven(number)) {
//     return number * 2
//   } else if (!numberToArray(equalArrays(number))) {
//     return number * 2;
//   } else {
//     return number;
//   }
// }

// console.log(twice(37));
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676