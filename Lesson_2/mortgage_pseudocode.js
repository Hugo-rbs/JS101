/* 

write some code that will allow users to calculate their mortgage after providing the following information:
- Amount of the loan 
- Annual Percent Rate (APR)
- Loan duration 

Once user's information gathered, calculate the loan duration in months:
- years * 12

and the monthly interest rate:
- formula: (APR/100)/12

Then calculate their monthly payment as well as yearly and return the information to user.

Ask user if they would like to calculate a different mortgage and restart the code if so. 


- edge cases: 
- require user to provide a minimum of $500 of loan amount 
- if no % rate provided for APR provide a result: loan / months
- loan duration max 30 year provide a message to user letting them know: 'The maximum home loan tenure offered by all major lenders is 30 years. '
- if user provide a answers that is not a number or a negative number, ask them to provide the correct information 
- the output must be rounded to two numbers 

Pseudocode: 

START

PRINT  welcome to the mortgage calculator!
WHILE true 
  WHILE 
    GET amount of loan 
    SET variable amountLoan
  IF NaN provided, non-integer or below 500
    PRINT number requested > 500
  ELSE
    skip to the next question 

  WHILE
    GET annual Percentage Rate 
    SET variable APR (annualPerRate)
    IF NaN provided or non integer 
      PRINT please provide a integer if you APR is of 0 type 0.
    ELSE skip to the next iteration   

  WHILE  
  GET Loan duration in years 
  SET variable loanLengthYear
  IF NaN provided or non integer 
      PRINT please provide a integer 
  ELSE skip to the next iteration

  CALCULATE loan duration/month -> loanLength * 12 
  SET var LOAN_LENGTH

  CALCULATE monthly interest: (AnnualPerRate/ 100) / 12
  SET var MONTHLY_INTEREST 

  CALCULATE monthly payment
  SET var monthlyPayment

  CALCULATE total payment
  SET var totalPayment

  CALCULATE total interest
  SET totalInterest
  
  PRINT monthlyPayment / TotalPayment / TotalInterest 

  GET ask if user wants calculate another mortgage option
  IF true loop to beginning 

  ELSE 
  PRINT have a good day 

  END 
*/



