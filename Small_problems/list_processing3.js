function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach(element => arr2.forEach(element2 => result.push(element * element2)));
  return result.sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));