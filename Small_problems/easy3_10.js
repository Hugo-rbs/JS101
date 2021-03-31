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