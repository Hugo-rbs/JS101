function century(year) {
  let century = 0;
  for (let idx = 1; idx <= year; idx += 100) {
    century += 1;
  }
  return lastOne(String(century));
}


function lastTwo(string) {
  return string.slice(string.length - 2) < 10 || string.slice(string.length - 2) > 20;
}

function lastOne (string) {
  let last = string.slice(string.length - 1);
  switch (lastTwo(string) && last) {
    case '1' : return string + 'st';
    case '2' : return string + 'nd';
    case '3' : return string + 'rd';
    default : return string + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));