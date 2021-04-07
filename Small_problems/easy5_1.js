let number = 76.73;
let string = String(number).split('.')[1];

console.log(string);

function dms(number){
  let numberToString = String(number);
  let degree = numberToString.split('.')[0];
  let minutesCalc = Number((numberToString.split('.')[1]) * .6);
  let minutes = String(Math.floor(minutesCalc));
  let secondesCalc = Number(String(minutes).split('.')[1] * 6);


  let result = String(degree) + '°' + minutes + "'" + secondesCalc;
  return result;
}


console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));