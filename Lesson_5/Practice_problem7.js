let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

// arr should return [2, [5,8]]
//arr[0] += 2 should return // [4, [5, 8]]; // a should return 4;
// arr[1][0] -= a; should return // [4, [1, 8]]; b should return [1, 8];