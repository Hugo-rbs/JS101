str1 = 'This line has spaces';
str2 = 'This,line,has,commas,';
str3 = 'No-spaces-or-commas';
// str4 = 'strawberry';
// str5 = 'raspberry';
// str6 = 'grappler';





console.log(str1.match(/\,| /g));
console.log(str2.match(/\,| /));
console.log(str3.match(/dragon/));