function multiplyList(arr1, arr2) {
  result = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    result.push(arr1[idx] * arr2[idx]);
  }
  return result;
}

multiplyList([3, 5, 7], [9, 10, 11]);