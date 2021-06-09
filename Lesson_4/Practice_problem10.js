let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let arrayOfAges = Object.values(ages);

let minimumAge = Math.min(...arrayOfAges);

console.log(minimumAge);