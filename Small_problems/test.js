function oddLengths(array) {
let oddArray = array.reduce((oddArr, element) => {
    let length = element.length;
    if (length % 2 === 1) {
    oddArr.push(length);
    }
  return oddArr;
}, []);
  console.log(oddArray);
}

oddLengths(['a', 'abcd', 'abcde', 'abc', 'ab']);