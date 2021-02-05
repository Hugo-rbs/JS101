const READLINE = require('readline-sync');
const MESSAGES = require('./assignment_mortgage_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(MESSAGES['welcome'])
/*
while(true){
  
}
*/