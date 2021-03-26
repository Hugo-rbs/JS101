// function fibonnaci(number) {
//   if (number < 2) {
//     return number;
//   }
//   return fibonnaci(number - 1) + fibonnaci(number - 2);
// }

// function findFibonnaciIndexByLength(number) {
//   number = fibonnaci(number);
//   let length = String(number).length;
//   console.log(length + 'n');
// }

// findFibonnaciIndexByLength(45);

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

console.log(findFibonacciIndexByLength(3));

