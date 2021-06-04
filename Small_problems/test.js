function randomNumber() {
  return Math.ceil(Math.random()* (120 - 20) + 20);
}

console.log(`Teddy is ${randomNumber()} age`);