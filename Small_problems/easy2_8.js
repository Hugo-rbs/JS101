// function oddities(arr) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(i % 2 === 0) {
//       arr1.push(arr[i]);
//     }
//   }
//   return arr1;
//   }

function oddities(array) {
  let result = [];
  for (let idx = 0; idx < array.length; idx += 2) {
    result.push(array[idx]);
  }
  return result;
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []