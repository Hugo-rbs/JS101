let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let names = Object.values(munsters);

let totalAge = 0;

for (let idx = 0; idx < names.length; idx += 1) {
  let age = names[idx].age;
  totalAge += age;
}

console.log(totalAge)