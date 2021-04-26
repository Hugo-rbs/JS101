let arr = ['jean', 'jacques'];

function capitalize(names) {
  return names.map(name => name[0].toUpperCase() + name.slice(1));
}

console.log(capitalize(arr));
console.log(arr)