let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeysValues = Object.entries(produce);
let onlyVeggies = {};

produceKeysValues.forEach(keyValues => {
  let [key, value] = keyValues;
  if (value === 'Vegetable') {
  onlyVeggies[key] = value;
  }
});

console.log(onlyVeggies);