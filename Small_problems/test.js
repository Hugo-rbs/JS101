function isLeapYear(year) {
  /*if (year % 4 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100) */
  return year % 4 === 0 || year % 100 ===0;
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2015)); 
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));