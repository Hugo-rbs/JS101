function oddLengths(array) {
  return array.reduce((numbersArr, element) => {
    let length = element.length;
    if (length % 2 ===  1) {
      numbersArr.push(length);
    }
    return numbersArr;
  }, []);
}

console.log(oddLengths(['a', 'abcd', 'abcde', 'abc', 'ab']));


