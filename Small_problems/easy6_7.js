// function swapName(names) {
// return names.split(' ')[1] + ', ' + names.split(' ')[0];
// }

function swapName(names) {
  return names.split(' ').reverse().join(', ');
}

// further exploration // 

// function swapName(name) {
//   name = name.split(' ');
//   return name.pop() + ', ' + name.join(' ');
// }

console.log(swapName('Joe Roberts'));