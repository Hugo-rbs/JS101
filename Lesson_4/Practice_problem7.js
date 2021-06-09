// What is the return value of map in the following code? Why? //

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/*
This should return [undefined, 'bear'];
the callback function should return false for 'ant' and true for 'bear' and because 'ant' return false the function implicitly return undefined 