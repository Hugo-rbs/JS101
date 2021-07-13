obj = {
  dog : 'gogo',
  size : 'small',
}

let obj2 = Object.create(obj);
let objStr = JSON.stringify(obj);
let newObj = JSON.parse(objStr);
newObj['favorite food'] = 'Chicken';
obj2.age = 5;

console.log(obj);
console.log(newObj);
console.log(obj2);