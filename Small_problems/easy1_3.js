// with while loop // 
/*
let counter = 1; 

while (counter <= 99 ) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter += 1;
}
*/

// with a for loop // 

/*
for (let counter = 1; counter <= 99; counter ++) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}
*/ 

// other option // 

/* 
for (let counter = 1; counter <= 99; counter ++) {
  if (counter % 2 === 1) {
    continue;
  }
  console.log(counter);
}

*/

// other option // 

for (let counter = 2; counter < 99; counter +=2) {
  console.log(counter);
}
