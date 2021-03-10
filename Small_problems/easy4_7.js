// function runningTotal(array) {
//   let newArr;
//   array.length === 0 ? newArr = [] : newArr = [array[0]];
//   for (let idx = 0; idx < array.length; idx++) {
//     if (newArr.indexOf(array[idx]) < 0) {
//       newArr.push(newArr[newArr.length - 1] + array[idx]);
//     }
//   }
//   console.log(newArr);
// }

runningTotal([2, 5, 13]);
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);

function runningTotal(array) {
  let resultArray = [];
  let sum = 0;
  for (let idx = 0; idx < array.length; idx++) {
    resultArray.push(sum + array[idx]);
  }
  console.log(resultArray);
}

