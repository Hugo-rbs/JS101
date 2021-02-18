/*
input: positive integer n 
output: if n is not a double number, return n else return n * 2; 

examples: 

twice(37); 3 and 7 are not double result: 37 * 2 = 74;
twice (444): n has 3 digits so it cannot be a double;
twice (2424): returns 2424;

1. we need to check if n is a double
2. if n is a double we return n
3. if not we return n * 2

1. is double ?
1.1 if n is odd return false
1.2 if n is even we need to split it into two equal parts 
1.2.1: if part 1 === part 2 return n
1.2.2: if part 1 !== part 2 return false 


*/

//checking if number is double:

function isDouble(n) {
  return n % 2 === 0 ? true : false;
}

// function twice 

function twice(n) {
  if (!isDouble(n)) {
    console.log(n * 2); 
  } else {
    let arrayOfNumber = n.toString().split('');
    for (let i = 0; i < arrayOfNumber; i++) {
      if (arrayOfNumber[i] === (arrayOfNumber.length / 2))
      console.log(arrayOfNumber.join());
    }
  }
}

twice(234234);