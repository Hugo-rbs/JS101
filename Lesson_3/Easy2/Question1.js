let advice = "Few things in life are as important as house training your pet dinosaur. It's very important!";
console.log(advice.replace(/important/g, 'urgent')); // non-destructive
console.log(advice);


// wordy alternative :

// let advice = "Few things in life are as important as house training your pet dinosaur. It's very important";

// let test = advice.split(' ').map(word => {
//   if (word === 'important') {
//     word = 'urgent';
//   }
//   return word;
// }).join(' ');

// console.log(test);



