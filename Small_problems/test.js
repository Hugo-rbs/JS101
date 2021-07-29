function highAndLow(string) {
  let sortedString = string.split(' ').map(char => Number(char)).sort((a,b) => a - b);
  let result = `${sortedString[0]} ${sortedString[sortedString.length - 1]}`;
  console.log(result);
  }



highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5")