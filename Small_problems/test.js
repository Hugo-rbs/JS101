let number = 6;
let repetition = [];;
for (let counter = 1; counter <= number; counter ++) {
  if (counter % 2 === 0) {
    repetition.push('0');
  } else if (counter % 2 === 1) {
    repetition.push('1')
  }
  console.log(repetition);
}