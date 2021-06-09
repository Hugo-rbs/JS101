// return value of the callback from the following code and return value of every //

[1, 2, 3].every(num => {
  return num = num * 2;
});

/* 
The return value of the callback should be [2, 4, 6];
The return value of every should be [true, true , true]
