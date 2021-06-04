// first solution //
function century(year) {
  let century = 0;
  for (let idx = 1; idx <= year; idx += 100) {
    century += 1;
  }
  return lastOne(String(century));
}

// this function isn't clear // supposed to return true if the last two are not between 10 & 20 
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

// provide another solution working with number rather then string // 

// from another attempt // 

// function century(year) {
//   let century = 0;
//   for (let idx = 1; idx <= year; idx += 100) {
//     century += 1;
//   }
//   century = String(century);

//   if (!isTh(century) && lastOne(century) === '1') {
//     return century + 'st';
//   } else if (!isTh(century) && lastOne(century) === '2') {
//     return century + 'nd';
//   } else if (!isTh(century) && lastOne(century) === '3') {
//     return century + 'rd';
//   } else {
//     return century + 'th';
//   }
// }

// function isTh(test) {
//   let lastTwo = test.slice(test.length - 2);
//   return lastTwo === '11' || lastTwo === '12' || lastTwo === '13';
// }

// function lastOne(test) {
//   let lastOne = test[test.length - 1];
//   return lastOne;
// }

console.log(century(1053));
