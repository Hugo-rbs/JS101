let rlSync = require('readline-sync');
let length = Number(rlSync.question('Enter the length of the room in meters: '));
let width = Number(rlSync.question('Enter the width of the room in meters: '));

const SQMETERS_TO_SQFEETS = 10.7639;

function roomSize(measure1, measure2) {
  return measure1 * measure2;
}

console.log(`The area of the room is ${roomSize(length, width)} square meters (${(roomSize(length, width) * SQMETERS_TO_SQFEETS).toFixed(2)} square feet)`);

// to do //

/*
1.rewrite the program.
2.further exploration
*/