let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

function isArray(input) {
  return Array.isArray(input);
}

console.log(isArray(numbers));
console.log(isArray(table));

