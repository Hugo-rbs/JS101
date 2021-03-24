let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
1. We create a variable arr1 to which we assign an array 
2. We assign the value of the variable arr1 to a new variable call arr2 using the slice method. 
(because the value is an array - the variable works as a pointer)
3. We update the first element of the array which is a key-value pair so that the value gets updated to 42
4. we ask the console to log arr1 but because of the (value as a pointer) arr1 and arr2 are pointing to the same array so when the value
is getting udating it impact the array to which all the variable points to
*/