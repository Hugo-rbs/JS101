// function sumOfSums(arr) {
//   let totalSum = 0;
//   let sum = 0;
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     let currentValue = arr[idx];
//     sum += currentValue;
//     totalSum += sum;
//   }
//   return totalSum;
// }


function sumOfSums(arr) {
  let totalSum = 0;
  for (let idx = 1; idx <= arr.length; idx += 1) {
    totalSum += arr.slice(0, idx).reduce((accumulator, number) => accumulator + number);
  }
  return totalSum;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));