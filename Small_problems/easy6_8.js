function sequence(count, startingNumber) {
  let multiples = [];
  for (let idx = 1; idx <= count; idx ++) {
    multiples.push(idx * startingNumber);
  }
  return multiples;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence (0, 100000));