function findDup(array) {
  return array.filter(element => {
    if (element.repeat(2)){
      return element;
    }
  });
}

console.log(findDup([1, 5, 3, 1]));