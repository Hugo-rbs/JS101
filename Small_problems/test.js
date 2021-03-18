let array = [1, 2, 3];
function bar(array) {
  return array = [4, 3, 5];
}


let newArray = bar(array);
console.log(array); 
console.log(newArray);