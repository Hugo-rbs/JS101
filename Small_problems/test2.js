let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectedFruit(listObject) {
  let listKeys = Object.keys(listObject);
  let result = {};
  for (let idx = 0; idx < listKeys.length; idx += 1) {
    let currentKey = listKeys[idx];
    let currentValue = listObject[currentKey];
    if (currentValue === 'Fruit') {
      result[currentKey] = currentValue;
    }
  }
  return result;
}

console.log(selectedFruit(produce));