// with a while loop //

/* let counter = 1; 

while (counter <= 99) {
  if (counter % 2 === 1) {
    console.log(counter);
  }
  counter += 1;
}
*/

// with a for loop // 

/*
for (let counter = 0; counter <= 99; counter ++ ) { 
  if(counter % 2 === 1) {
    console.log(counter);
  }
}
*/

// other solution with while loop // 

/* 
counter = 1; 

while (counter <= 99 ) {
  console.log(counter);
  counter += 2;
}
*/

// other solution with for loop //

/*
for (let counter = 1; counter <= 99; counter += 2) {
  console.log(counter);
}

*/

// Further Exploration // 

let rlSync = require('readline-sync');
let number = Number(rlSync.question('Provide an min odd number between 1 and 99: '));
let limit = Number(rlSync.question('Provide a max odd number between 1 and 99: '));


for (let counter = number; counter <= 99; counter += 2) {
   console.log(counter);
   if (counter === limit) {
     break;
  }
}

