function greatestNumber(arr) {
  let result = arr[0];
  let index = 0; 
  while (index < arr.length) {
    if (result < arr[index]) {
      result = arr[index];
    }
    index += 1;
  }
  console.log(result);
}

greatestNumber([1, 12, 23, 124, 5, 56, 3456, 2]);