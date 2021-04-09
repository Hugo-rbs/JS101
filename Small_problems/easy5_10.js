// function average(array) {
//   let average = array.reduce((accumulator, number) => 
//     accumulator + number, 0);
//   let result = average / array.length;
//   return Math.floor(result);
// }

// function average(array) {
//   let average = 0;
//   for (let idx = 0; idx < array.length; idx ++) {
//     average += array[idx];
//   }
//   return Math.floor(average / array.length);
// }

function average(array) {
  let average;
  array.forEach(number => average = number + number);
  return Math.floor(average / array.length);
}

console.log(average([9, 47, 23, 95, 16, 52]));