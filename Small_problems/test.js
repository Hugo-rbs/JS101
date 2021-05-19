function greet(greeting = 'Hello', value = 'world') {
  console.log(greeting + ', ' + value + '!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!

greet('Good morning', 'Launch School');