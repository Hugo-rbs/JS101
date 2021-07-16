function joinOr(arr, delimiter1 = ', ', delimiter2 = 'or') {

  switch(arr.length) {
    case 0 : return '';
    case 1 : return String(arr[0]);
    case 2 : return arr.join(` ${delimiter2} `);
    default : return arr.slice(0, arr.length - 1).join(delimiter1) + `${delimiter1}${delimiter2} ${arr[arr.length - 1]}`;
  }

}

console.log(joinOr([1, 3]));

