let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


function transactionsFor(id, array) {
  return array.filter(el => el.id === id);
}

function isItemAvailable(item, transactions) {
  let selectedItem = transactionsFor(item, transactions);
  let count = 0;
  selectedItem.forEach(item => {
    if (item.movement === 'in') {
      count += item.quantity;
    } else if (item.movement === 'out') {
      count -= item.quantity;
    }
  });
  return count > 0;
}


console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));