let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let arrayOfAges = Object.values(ages);

let total = arrayOfAges.reduce((accumulator, element) => accumulator + element, 0);
console.log(total);