 /*
 input: number (year)
 output: string (century number of the provided year)

 example 
 century(2000) // returns 20th
 century(2001) // returns 21st
 century(256) // returns 3rd 

 new centuries begin in years that end with 01:
 1 -> 100:   1st     1101 -> 1200: 12th
 101 -> 200: 2nd     1201 -> 1300: 13th 
 201 -> 300: 3rd     1301 -> 1400: 14th
 301 -> 400: 4th     1401 -> 1500: 15th 
 401 -> 500: 5th     1501 -> 1600: 16th
 501 -> 600: 6th     1601 -> 1700: 17th
 601 -> 700: 7th     1701 -> 1800: 18th
 701 -> 800: 8th     1801 -> 1900: 19th
 801 -> 900: 9th     1901 -> 2000: 20th
 901 -> 1000: 10th   2001 -> 2100: 21st
1001 -> 1100: 11th   2101 -> 2200: 22nd
 if n < 3 digits and end with 1,2 or 3 it's the 1st, 2nd, 3rd
 if n > 3 digits and < 4 it's th 

if n > 4 digits 

1. 