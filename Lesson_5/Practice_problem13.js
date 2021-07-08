let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// clearest solution // 

arr.sort((a,b) => {
  let aSum = a.filter(n => n % 2 === 1).reduce((acc, el) => acc + el);
  let bSum = b.filter(n => n % 2 === 1).reduce((acc, el) => acc + el);

  return (aSum - bSum);
}));

// other solution //

// function isOdd (number) {
//   return number % 2 === 1;
// }

// function sort(a, b) {
//   let aSum = 0;
//   let bSum = 0;

//   for (let idx = 0; idx < a.length; idx += 1) {
//     let currentValue = a[idx];
//     if (isOdd(currentValue)) {
//       aSum += currentValue;
//     }
//   }

//   for (let idx = 0; idx < b.length; idx += 1) {
//     let currentValue = b[idx];
//     if(isOdd(currentValue)) {
//       bSum += currentValue;
//     }
//   }

//   if (aSum > bSum) {
//     return 1;
//   } else if (aSum < bSum) {
//     return -1;
//   } else {
//     return 0;

//   }
// }

// console.log(arr.sort(sort));