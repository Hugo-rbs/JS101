let penultimate = (string) => {
  let test = string.split(' ');
  return test[test.length -2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// TO DO - further exploration // 