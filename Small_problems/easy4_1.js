function randomNumber(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor((Math.random() * (max - min)) + min);
}

let age = randomNumber(120, 20);

console.log(`Teddy is ${age} years old!`);