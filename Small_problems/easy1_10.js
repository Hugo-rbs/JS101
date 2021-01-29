function multiSum(number) {
  let result = number;
  for (let n = 1 ; n < number; n++) {
    if (n % 3 === 0 || n % 5 === 0)
    result += n;
  }
  console.log(result);
}

multisum(10);