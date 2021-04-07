function interleave(arr1, arr2) {
  let result = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    result.push(arr1[idx], arr2[idx]);
  }
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));