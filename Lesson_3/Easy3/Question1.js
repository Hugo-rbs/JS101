let numbers = [1, 2, 3, 4];

// while(numbers.length > 0) {
//   numbers.shift();
// }

// console.log(numbers);

// while(numbers.length > 0) {
//   numbers.pop();
// }

// console.log(numbers);

for (let idx = 0; idx < numbers.length; idx++) {
  if (numbers[idx] > 0) {
    numbers.shift();
    
  }
}

console.log(numbers);