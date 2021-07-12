let vehicle = {
  Manufacturer : 'Tesla',
  Model : 'Model X',
  year : 2015,
  range : 295,
  Seats : 7
};

let keys = Object.keys(vehicle);
let keys2 = [];

for (let prop in vehicle) {
  keys2.push(prop);
}

console.log(keys);
console.log(keys2);