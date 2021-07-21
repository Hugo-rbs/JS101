let test = ['Vivien', 'Jayne', ['Gaspard', 'Melanie'], ['Apolline', 'Bastien']];

let test2 = [].concat(...test);
console.log(test2);

test3 = test.reduce((arr, el) => arr.concat(el), []);
console.log(test3);

let test4 = [];
test.forEach(el => test4 = test4.concat(el));
console.log(test4);
