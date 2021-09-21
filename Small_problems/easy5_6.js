function multiplicativeAverage(arr) {
  let product = arr.reduce((accumulator, element) => {
    return accumulator * element}, 1);

  let result = (product / arr.length).toFixed(3);
  return result;
}


// function multiplicativeAverage(array) {
//   let total = 1;
//   for (let idx = 0; idx < array.length; idx += 1) {
//     let multiples = array[idx];
//     total *= multiples;
//   }
//   let result = (total / array.length).toFixed(3);
  
//   console.log(result);
// }


console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));
