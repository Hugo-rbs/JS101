function reverse(array) {
  return array.sort((a, b) => b - a);
}

let list = ["a", "b", "c", "d", "e"];
let result = reverse(list);
console.log(result);
console.log(list === result)
