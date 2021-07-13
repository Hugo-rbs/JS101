// function buyFruit(array) {
//   let result = [];
//   for (let idx = 0; idx < array.length; idx += 1) {
//     let currentPair = array[idx];
//     let fruit = currentPair[0];
//     let count = currentPair[1];
//     let newCount = 1;
//     while (newCount <= count) {
//       result.push(fruit);
//       newCount += 1;
//     }
//   }
//   console.log(result);
// }

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(array) {
  let result = [];
  array.forEach(keyValue => {
    let [key, value] = keyValue;
    let count = 1;
    while (count <= value) {
      result.push(key);
      count += 1;
    }
  });
  console.log(result);
}