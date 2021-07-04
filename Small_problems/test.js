let obj1 = {
  dog : 'gogo',
  size : 'medium'
}

let obj2 = Object.create(obj1);
obj2.food = 'Chicken';

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
  console.log(obj2[prop]);
  }
}