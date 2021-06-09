// How does Array.prototype.fill work? Is it destructive? How can we find out? //

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

/*
fill is destructive. it takes 3 parameters, 
- a value (value that you wish to use to replace the elements in an array);
- a start index (optional);
- an end index (optional);