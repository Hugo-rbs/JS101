let arr = ['10', '11', '9', '7', '8'];

let sortedArr = arr.sort((a,b) => Number(b) - Number(a));

let sortedArr2 = arr.sort((a, b) => {
  if (Number(a) < Number(b)) {
    return 1;
  } else if (Number(a) > Number(b)) {
    return -1;
  } else {
    return 0;
  }
});