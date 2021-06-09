let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObj = {};
flintstones.forEach((element, index) => {
  flintstonesObj[element] = index;
});
console.log(flintstonesObj);