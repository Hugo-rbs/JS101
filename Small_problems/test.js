function century(number) {
  let century = 1;
  for (let idx = 101; idx <= number; idx += 100) {
    century += 1;
  }
  century = century.toString();
  let lastNumber = century[century.length -1];
  let first = century[0];
  if (century.length === 2 && first === '1') {
    return century + 'th';
  };

  switch(lastNumber) {
    case '1' : return century + 'st';
    case '2' : return century + 'nd';
    case '3': return century + 'rd';
    default : return century + 'th';
  }
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1053));
console.log(century(1127));
console.log(century(11201));
