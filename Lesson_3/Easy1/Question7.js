let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.split(' ').indexOf('Dino') <= 0);
console.log(/Dino/.test(str2));
console.log(str2.match('Dino') !== null)