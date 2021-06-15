// function average(array) {
//   let sum = 0;
//   for (let idx = 0; idx < array.length; idx += 1) {
//     sum += array[idx];
//   }
//   let result = Math.floor(sum / array.length);
//   console.log(result);
// }

// function average(array) {
//   let sum = 0;
//   array.forEach(number => {
//     sum += number;
//   });
//   let result = Math.floor(sum / array.length);
//   console.log(result);
// }

function average(array) {
  let sum = array.reduce((accumulator, element) => accumulator + element);
  console.log(Math.floor(sum / array.length));
}

console.log(average([9, 47, 23, 95, 16, 52]));