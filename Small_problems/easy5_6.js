function multiplicativeAverage(arr) {
  let product = arr.reduce((accumulator, element) => {
    return accumulator * element}, 1);

  let result = (product / arr.length).toFixed(3);
  return result;
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));
