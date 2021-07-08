let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
let selection = [];

for (let prop in obj) {
  if (obj[prop].type === 'fruit') {
    selection.push(obj[prop].colors.map(el => el[0].toUpperCase() + el.slice(1)));
  } else if (obj[prop].type === 'vegetable') {
    selection.push(obj[prop].size.toUpperCase());
  }
}

console.log(selection)

// other solution chaining methods // 

et word = word => word[0].toUpperCase() + word.slice(1);

console.log(Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(el => word(el));
  } else if (attributes['type'] === 'vegetable') {
    return attributes['size'].toUpperCase();
  }
}));
