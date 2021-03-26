let string = 'The Flintstones Rock!';
// let count = 1;

// while (count <= 10) {
//   let space = " ".repeat(count);
//   console.log(space + string);
//   count += 1;
// }

for (let count = 1; count <= 10; count++) {
  let padding = " ".repeat(count);
  console.log(padding + string);
}
