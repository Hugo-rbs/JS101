let objA = { a: 1, b: 2}
let objB = Object.create(objA);
objB = {c: 1, d: 2};

let keys =  Object.keys(objB);
console.log(keys);