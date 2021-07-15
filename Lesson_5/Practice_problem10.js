let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let orderedDescending = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort().reverse();
  } else {
    return subArr.slice().sort((a,b) => b - a);
  }
})

console.log(orderedDescending)

// other solution

// let sortedArr = arr.map(subArr => {
//   if (typeof(subArr[0]) === Number) {
//     return subArr.sort((a, b) => a - b);
//   } else {
//     return subArr.sort();
//   }
// });