// let arr = [2, 5, 13];
// let newArr = []
// for (let idx = 0; idx < arr.length; idx++) {

// }


function runningTotal(arr) {
  let result = [];
  if (arr.length < 1) {
    return result;
  }
  result = [arr.shift()];
  for (let idx = 0; idx < arr.length; idx++) {
    result.push(result[idx] + arr[idx]);
  }
  console.log(result);
}

runningTotal([2, 5, 13]);
runningTotal([14, 11, 7, 15, 20]);
runningTotal([3]);
runningTotal([]);