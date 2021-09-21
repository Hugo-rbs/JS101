// function union(arr1, arr2) {
//   let newArr = [...arr1];
//   for (let idx = 0; idx < arr2.length; idx += 1) {
//     let currentValue = arr2[idx];
//     if (newArr.indexOf(currentValue) >= 1) {
//       continue;
//     }
//     newArr.push(currentValue);
//   }
//   return newArr;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

let arrDup = [...arr1, ...arr2];

console.log(arrDup);