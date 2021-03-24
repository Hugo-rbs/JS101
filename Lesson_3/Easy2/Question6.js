// let flintstones = ["Fred", "Wilma"];
// flintstones.push('Barney', 'Betty', 'Bambam', 'Pebbles');
// console.log(flintstones);
// let flintstonesTwo = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// let arr = flintstonesTwo.flat();

// let flintstones = ["Fred", "Wilma"];
// let flintstonesTwo = flintstones.concat(["Barney", "Betty"]).concat(["Bambam", "Pebbles"]);
// let flintstonesTwo = [...flintstones, 'Barney', 'Betty', 'Bambam', 'Pebbles'];

// console.log(flintstonesTwo);


// let flintstones = ["Fred", "Wilma"];
// flintstones = [...flintstones.concat(["Barney", "Betty"]).concat(["Bambam", "Pebbles"])];
// console.log(flintstones);

let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// flintstones = [].concat(...flintstones);

// flintstones = flintstones.reduce((accumulator, element) => accumulator.concat(element), []);
// console.log(flintstones);

flintstones = [flintstones.forEach(element => {
  let array = element;
array.forEach(element => element);
})];

console.log(flintstones);