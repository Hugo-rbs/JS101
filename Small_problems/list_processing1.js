let Digits = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
}

function sum(number) {
  return number.toString().split('').map(number => Digits[number]).reduce((accumulator, element) => {
    return accumulator + element;
  }, 0);
}
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45