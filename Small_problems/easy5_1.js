const MINUTES_IN_HOUR = 60;
const SECONDES_IN_HOUR = 3600;

function dms(decimalDegree) {
  let degree = Math.floor(decimalDegree);
  let minutes = Math.floor((decimalDegree - degree) * MINUTES_IN_HOUR);
  let secondes = Math.floor((decimalDegree - degree - (minutes / MINUTES_IN_HOUR)) * SECONDES_IN_HOUR);
  return String(degree) + '°' + String(minutes) + '"' + String(secondes) + "'";
}

console.log(dms(30))   // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

/*
formula for converting decimal degrees to degrees: 
*/
