let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

let wordPrompt = vocabulary.map(synonymsArr => synonymsArr.map(words => words)).split(' ');


console.log(wordPrompt);