function copyNonDup(newArr, arr) {
  arr.forEach(element => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
}

function union(arr1, arr2) {
  let result = [];
  copyNonDup(result, arr1);
  copyNonDup(result, arr2);
  return result
}

console.log(union([1, 3, 5], [3, 3, 4]));