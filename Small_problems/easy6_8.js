function isMultiple(number, multiple) {
  return number % multiple === 0;
}

function sequence(count, startingNumber) {
  let result = [];
  if (count === 0) {
    return result;
  } else if (Math.sign(startingNumber) === 1) {
    for (let idx = startingNumber; idx < 1000; idx++) {
      if(isMultiple(startingNumber, idx)) {
        while (result.length < count) {
          result.push(idx);
        }
      }
    }
  } else if (Math.sign(startingNumber) === -1) {
    for (let idx = startingNumber; idx > -1000; idx--) {
      if(isMultiple(startingNumber, idx)) {
        while(result.length < count) {
          result.push(idx);
        }
      }
    }
  }
  return result;
}

console.log(sequence(5, -1));
console.log(sequence(4, -7))