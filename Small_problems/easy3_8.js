function average(a, b, c) {
  return ((a + b + c) / 3).toFixed(2);
}


function getGrade(gradeA, gradeB, gradeC) {
  let result = average(gradeA, gradeB, gradeC);
  if(result >= 0 && result < 60) {
    return 'F';
  } else if(result > 60 && result < 70) {
    return 'D';
  } else if(result > 70 && result < 80) {
    return 'C';
  } else if(result > 80 && result < 90) {
    return 'B';
  } else if(result > 90 && result <= 100) {
    return 'A';
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));

