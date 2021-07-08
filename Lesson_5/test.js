function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);

//first it arr [1,3, 4, 2, 4, 6, 5, 7, 9, 10, 12] evens []
//second it arr [3, 4, 2, 4, 6, 5, 7, 9, 10, 12] evens []
// third it arr[4, 2, 4, 6, 5, 7, 9, 10, 12] evens[4]
// fourth it arr[2, 4, 6, 5, 7, 9 ,10, 12] evens[4]
// fifth it arr[[4, 6, 5, 7, 9 ,10, 12]]