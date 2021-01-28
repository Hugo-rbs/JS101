function multiply(n1, n2) {
  return n1 * n2;
}

/*
function square(number) {
  return multiply(number, number);
}
*/ 

let square = number => multiply(number, number);

console.log(square(3));

// TO DO: further exploration //