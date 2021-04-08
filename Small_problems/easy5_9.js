function countOccurences(list) {
  let count = {};
  for (let idx = 0; idx < list.length; idx++) {
    let word = list[idx];
    if (word === 0) {
      continue;
    }
    if (!count[word]) {
      count[word] = 0;
    }
    count[word] += 1;
  }
  return count;
}

console.log(countOccurences(['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck']));