let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let orderedArr = arr.map((subArr => {
  for (let idx = 0; idx < subArr.length; idx += 1) {
    if (Number.isInteger(subArr[idx])) {
      return subArr.slice().sort((a,b) => a - b);
    } else {
      return subArr.slice().sort();
    }
  }
  return subArr;
}));

console.log(orderedArr);
console.log(arr)
