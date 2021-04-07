function union(arr1, arr2) {
  let result = arr1;
  for (let idx = 0; idx < arr2.length; idx++) {
    if (result.indexOf(arr2[idx]) < 0) {
      result.push(arr2[idx]);
    }
  }
  return result;
}

console.log(union([1, 3, 5], [3, 6, 9, 8, 4, 12, 4, 8]));