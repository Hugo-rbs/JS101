function negative(number) {
  if (Math.sign(number) >= 0) {
    return -number;
  }
  return number;
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));