/* 
Input: 
- Loan amount: 
- Annual Percentage Rate(APR):
- Loan duration/year:

Formula: 
- Loan duration/months: loan duration(years) * 12 (const LOAN_MONTH)
- Monthly interest rate: ((APR / 100) / LOAN_MONTH) = Monthly interest rate(decimal)
- Monthly payment: loanAmount * (MonthlyInterestRate / (1 - Math.pow((1 + MonthlyInterestRate),(-LOAN_MONTH)))

Output: Math.round(Monthly payments)

examples: 
- loan amount: 15000;
- Annual Percentage Rate (in %): 10%
- loan duration in years: 5

