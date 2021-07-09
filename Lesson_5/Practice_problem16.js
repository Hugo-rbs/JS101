// return an object where the key is the first item in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }


// with array destructuring assignement:

let obj = {};

arr.forEach(keyValue => {
  let [key, value] = keyValue;
  obj[key] = value;
});

// other option:

// let obj = {};

// arr.forEach(keyValue => {
//   let key = keyValue[0];
//   let value = keyValue[1];
//   obj[key] = value;
// });

// console.log(obj);