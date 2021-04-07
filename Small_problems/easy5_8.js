function digitList(number) {
  numberToString = String(number);
  let result = [];
  for (let idx = 0; idx < numberToString.length; idx ++) {
    result.push(numberToString[idx]);
  }
  return result;
}

