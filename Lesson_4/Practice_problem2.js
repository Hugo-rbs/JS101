// What would be the return value of the following code //

[1, 2, 3].map(num => {
  num * num;
});

/* The code above does not have a return keyword in the callback
therefore the return value will be [undefined, undefined, undefined]
