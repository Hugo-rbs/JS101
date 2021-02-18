/*

input: string consisting of words and assortment of non-alphabetic characters.
output: string with non-alphabetic characters replaced with spaces.

rules: 
- if one or more non-alphabetic characters occurs in a row you should ony have one space in result (non consecutive spaces)

examples: cleanUp("---what's my +*& line?") // 'What s my line'[']
cleanUp("I'm feeling good, shouldn't I?") // I m feeling good shouldn t I

1. we need to check if the string includes any non-alphabetic characters 
1.1 if no we return the string 
1.2 if yes we need to replace the characters by empty spaces
2. we need to check if the string has more than one empty space in a row 
2.1 if not we return the string
2.2 if yes we need to remove the extra empty spaces 

start 
const specialChar = [];