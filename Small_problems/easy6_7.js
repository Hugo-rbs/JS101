// function swapName(names) {
// return names.split(' ')[1] + ', ' + names.split(' ')[0];
// }

function swapName(names) {
  return names.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));