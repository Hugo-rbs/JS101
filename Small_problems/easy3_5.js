ALGORITHM:
//Right Triangles
//Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

/*
INPUT: postive integer (number of stars for each side)
OUTPUT: log triangle with *
RULES:
  - right triangle: 1 angle of 90deg
  - the 2 sides that are not the hyptenuse ARE EQUAL
  - number of characters per line is equal to n
  - number of lines is equal to n
  - each line is equal to: a number of spaces + a number of *
  - first line has spaces and 1 star
  - last line has no spaces and n stars
EDGE CASES?
  - 0?
  - 1?
  - 2?
EXAMPLES:
n = 0, 1: no triangle
n = 2:
 *
**

n = 3:
  * : 2 spaces, 1 * (3 characters total)
 ** : 1 space, 2 * (3 characters total)
*** : 0 spaces, 3 * (3 characters total)
//   1. Print the number of spaces and stars passed as arguments
// */

// function triangle(n) {
//   let numberOfSpaces = n - 1;

//   for (let numberOfStars = 1; numberOfStars <= n; numberOfStars += 1) {
//     printSpacesAndStars(numberOfSpaces, numberOfStars);
//     numberOfSpaces -= 1;
//   }
// }

// function printSpacesAndStars(numberOfSpaces, numberOfStars) {
//   console.log(' '.repeat(numberOfSpaces) + '*'.repeat(numberOfStars));

// }




function triangle(n) {
  let numberOfSpaces = n - 1;
  for (let numberOfStars = 1; numberOfStars <= n; numberOfStars ++) {
    printSpacesAndStars(numberOfSpaces, numberOfStars);
    numberOfSpaces -= 1;
  }
}

function printSpacesAndStars(numberOfSpaces, numberOfStars){
  console.log(' '.repeat(numberOfSpaces) + '*'.repeat(numberOfStars));
}

triangle(5);

// solution 2: 

/*

function logStars(number) {
  for (let starsToLog = 1; starsToLog <= number; starsToLog++) {
    console.log(' '.repeat(number - starsToLog) + '*'.repeat(starsToLog));
  }
}

*/

// solution 3: 

/*
function triangle(height) {
  let spacesToLog = height - 1;
  let starsToLog = 1;

  while (height > 0) {
    console.log(' '.repeat(spacesToLog) + "*".repeat(starsToLog));
    spacesToLog -=1
    starsToLog += 1;
    height -= 1;
  }
}
*/