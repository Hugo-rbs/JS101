let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(array => array.filter(element => element % 3 === 0));

console.log(newArr) 